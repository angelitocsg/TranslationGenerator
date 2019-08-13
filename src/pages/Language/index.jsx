import React from 'react';
import { Container, Title, Line, Header } from './styles.js';
import { lang as langModel } from './model';

const getData = (text) => {
  return "text/json;charset=utf-8," + encodeURIComponent(text);
}

const getNewId = () => (Math.floor(Math.random() * 10000));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadData: "",
      language: [...langModel.sort((a, b) => (a.grp + a.tag < b.grp + b.tag ? -1 : 1))]
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleNewClick = this.handleNewClick.bind(this);
  }

  handleInputChange(tag, e) {
    this.setState({
      ...this.state,
      language: [
        ...this.state.language.map(l => {
          return l.tag === tag ? { ...l, [e.target.name]: e.target.value } : l
        })
      ]
    });
  }

  handleAddTag() {
    var id = getNewId();
    this.setState({
      ...this.state,
      language: [
        ...this.state.language,
        {
          "id": id,
          "tag": "new_" + id,
          "grp": "",
          "pt": "",
          "en": "",
          "es": "",
        }
      ]
    })
  }

  handleSave = () => {
    var obj_files_download = document.getElementById('files_download');
    obj_files_download.style.display = "inherit";

    var language = this.state.language.sort((a, b) => (a.grp + a.tag < b.grp + b.tag ? -1 : 1));

    var pt = `const locale = ${JSON.stringify(language.reduce((p, c) => ({ ...p, [c.tag]: c.pt }), {}), null, 2)}; \nexport default locale;`;
    var en = `const locale = ${JSON.stringify(language.reduce((p, c) => ({ ...p, [c.tag]: c.en }), {}), null, 2)}; \nexport default locale;`;
    var es = `const locale = ${JSON.stringify(language.reduce((p, c) => ({ ...p, [c.tag]: c.es }), {}), null, 2)}; \nexport default locale;`;

    var pt_csharp = `${language.reduce((p, c) => (`${p}${c.tag}\t${c.pt}\t${c.grp}\n`), "")}`;
    var en_csharp = `${language.reduce((p, c) => (`${p}${c.tag}\t${c.en}\t${c.grp}\n`), "")}`;
    var es_csharp = `${language.reduce((p, c) => (`${p}${c.tag}\t${c.es}\t${c.grp}\n`), "")}`;

    document.getElementById('download_default').href = 'data:' + getData(JSON.stringify(language));

    document.getElementById('download_pt').href = 'data:' + getData(pt);
    document.getElementById('download_en').href = 'data:' + getData(en);
    document.getElementById('download_es').href = 'data:' + getData(es);

    document.getElementById('download_pt_csharp').href = 'data:' + getData(pt_csharp);
    document.getElementById('download_en_csharp').href = 'data:' + getData(en_csharp);
    document.getElementById('download_es_csharp').href = 'data:' + getData(es_csharp);

    localStorage.setItem('lang', JSON.stringify(this.state.language));
  }

  handleUpload() {
    this.setState({
      ...this.state,
      language: JSON.parse(this.state.uploadData),
      uploadData: "",
    })
  }

  handleTextareaChange(e) {
    this.setState({
      ...this.state,
      uploadData: e.target.value
    });
  }

  handleCreateClick(line) {
    if (line.en === "" || line.en === undefined) { return; }
    var tag = window.prepareWords(line.en.split(" "));
    this.setState({
      ...this.state,
      language: [
        ...this.state.language.map(l => {
          return l.id === line.id ? { ...l, tag } : l
        })
      ]
    });
  }

  handleNewClick() {
    localStorage.clear();
    this.setState({ ...this.state, language: [...langModel] })
  }

  render() {
    const { language, uploadData } = this.state;

    return (
      <Container id="container" className="container">
        <Title>Translation Generator</Title>
        <div className="btn-group">
          <button type="button" className="btn btn-xs btn-info" onClick={() => this.handleNewClick()}>New</button>
          <button type="button" className="btn btn-xs btn-success" onClick={() => this.handleSave()}>Save</button>
          <button type="button" className="btn btn-xs btn-primary" onClick={() => this.handleAddTag()}>Add tag</button>
          <div className="dropdown" style={{ display: "none" }} id="files_download">
            <button style={{ borderRadius: 0 }}
              className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Downloads</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a href="#/" id="download_default" className="dropdown-item" download="default.json">Default</a>
              <div className="dropdown-divider"></div>
              <h6 className="dropdown-header">Javascript</h6>
              <a href="#/" id="download_en" className="dropdown-item" download="en-US.js">English</a>
              <a href="#/" id="download_pt" className="dropdown-item" download="pt-BR.js">Português</a>
              <a href="#/" id="download_es" className="dropdown-item" download="es-ES.js">Español</a>
              <div className="dropdown-divider"></div>
              <h6 className="dropdown-header">C#</h6>
              <a href="#/" id="download_en_csharp" className="dropdown-item" download="en-US(csharp).txt">English</a>
              <a href="#/" id="download_pt_csharp" className="dropdown-item" download="pt-BR(csharp).txt">Português</a>
              <a href="#/" id="download_es_csharp" className="dropdown-item" download="es-ES(csharp).txt">Español</a>
            </div>
          </div>
          <a href="#/" id="download" className="btn btn-xs btn-info" style={{ display: "none" }} download="language.json">Download</a>
          <button type="button" className="btn btn-xs btn-primary" data-toggle="modal" data-target="#modalUpload">Upload</button>
        </div>
        <br />
        <br />

        <Line className="row col lang-line">
          <Header className="col">Tag</Header>
          <Header className="col">Group</Header>
          <Header className="col">English</Header>
          <Header className="col">Português</Header>
          <Header className="col">Español</Header>
        </Line>

        <form className="was-validated lang-form">
          {language.map(l => (
            <Line className="row col lang-line" key={l.id}>
              <div className="col">
                <div className="btn-group" style={{ width: "100%", height: "25px" }}>
                  <input type="text"
                    value={l.tag}
                    onChange={(e) => this.handleInputChange(l.tag, e)}
                    name="tag"
                    required="required"
                    className="form-control"
                    autoComplete="false"
                    autoCorrect="false"
                    placeholder="Tag" />
                  <button onClick={() => this.handleCreateClick(l)} className="btn btn-sm btn-secondary" style={{ borderRadius: 0 }}>New</button>
                </div>
              </div>
              <div className="col">
                <input type="text"
                  value={l.grp}
                  onChange={(e) => this.handleInputChange(l.tag, e)}
                  name="grp"
                  required="required"
                  className="form-control"
                  autoComplete="false"
                  autoCorrect="false"
                  placeholder="Group" />
              </div>
              <div className="col">
                <input type="text"
                  value={l.en}
                  onChange={(e) => this.handleInputChange(l.tag, e)}
                  name="en"
                  required="required"
                  className="form-control"
                  autoComplete="false"
                  autoCorrect="false"
                  placeholder="English" />
              </div>
              <div className="col">
                <input type="text"
                  value={l.pt}
                  onChange={(e) => this.handleInputChange(l.tag, e)}
                  name="pt"
                  required="required"
                  className="form-control"
                  autoComplete="false"
                  autoCorrect="false"
                  placeholder="Português" />
              </div>
              <div className="col">
                <input type="text"
                  value={l.es}
                  onChange={(e) => this.handleInputChange(l.tag, e)}
                  name="es"
                  required="required"
                  className="form-control"
                  autoComplete="false"
                  autoCorrect="false"
                  placeholder="Español" />
              </div>
            </Line>
          ))}
        </form>

        <div className="modal fade" id="modalUpload" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Upload language file</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <textarea rows="10" className="form-control"
                  onChange={this.handleTextareaChange}
                  value={uploadData}
                  placeholder='[{"tag":"Enter","grp":"Buttons","en":"Enter","pt":"Entrar","es":"Entrar"}]'
                ></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.handleUpload()}>Upload</button>
              </div>
            </div>
          </div>
        </div>

      </Container>
    );
  }
}
export default App;
