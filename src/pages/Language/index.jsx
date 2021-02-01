import React, { useState } from 'react';

import Footer from '../../components/Footer';
import ImportForm from '../../components/ImportForm';
import NavHeader from '../../components/NavHeader';
import Table from '../../components/Table';
import { Translate } from '../../storage/TranslateStorage';

const Language = () => {
  const [content, setContent] = useState(Translate.GetContent());
  const [files, setFiles] = useState(Translate.GetFiles());
  const [hasChanges, setHasChanges] = useState(false);
  const [contentToImport, setContentToImport] = useState('');

  const hideImportModal = () => {
    var myModalEl = document.getElementById('importModal');
    var modal = window.bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
  };

  const handleNewClick = () => {
    Translate.NewTable();
    setContent(Translate.GetContent());
    setFiles(Translate.GetFiles());
  };

  const handleImportClick = () => {
    if (contentToImport === '') return;
    Translate.ImportTable(contentToImport);
    handleSaveClick();
    hideImportModal();
    setContentToImport('');
  };

  const handleImportContentChange = (e) => {
    var content = e.target.value;
    setContentToImport(content);
  };

  const handleSaveClick = () => {
    Translate.SaveTable();
    setContent(Translate.GetContent());
    setFiles(Translate.GetFiles());
    setHasChanges(false);
  };

  const handleFieldChange = (e, id) => {
    var field = e.target.name;
    var value = e.target.value;
    Translate.UpdateLine(id, field, value);
    setContent(Translate.GetContent());
  };

  const handlePackJSClick = () => {
    document.getElementById('download_default').click();
    var languages = Translate.GetLanguages();
    languages.forEach((lang) => document.getElementById(`download_${lang.id}`).click());
  };
  const handlePackCSharpClick = () => {
    document.getElementById('download_default').click();
    var languages = Translate.GetLanguages();
    languages.forEach((lang) => document.getElementById(`download_${lang.id}_csharp`).click());
  };

  const handleAddLine = () => {
    Translate.AddLine();
    setContent(Translate.GetContent());
    window.scrollTo(0, document.body.scrollHeight);
    StateChanged();
  };

  const handleCreate = (item) => {
    var tag = window.prepareWords(item.en.split(' '));
    Translate.UpdateLine(item.id, 'tag', tag);
    setContent(Translate.GetContent());
    StateChanged();
  };

  const handleDelete = (id) => {
    Translate.DeleteLine(id);
    setContent(Translate.GetContent());
    StateChanged();
  };

  const handleFormChange = () => {
    StateChanged();
  };

  const StateChanged = () => {
    Translate.ClearFiles();
    setFiles(Translate.GetFiles());
    setHasChanges(true);
  };

  return (
    <>
      <NavHeader
        files={files}
        hasChanges={hasChanges}
        onNewClick={handleNewClick}
        onImportClick={handleImportClick}
        onSaveClick={handleSaveClick}
        onPackJSClick={handlePackJSClick}
        onPackCSharpClick={handlePackCSharpClick}></NavHeader>
      <main className="flex-shrink-0">
        <div className="container">
          <Table
            content={content}
            onChange={handleFieldChange}
            onCreateClick={handleCreate}
            onDeleteClick={handleDelete}
            onFormChange={handleFormChange}></Table>
          <br />
          <br />
          <br />
          <br />
        </div>
      </main>
      <ImportForm
        contentToImport={contentToImport}
        onImportContentChange={handleImportContentChange}
        onImportClick={handleImportClick}></ImportForm>
      <Footer
        hasChanges={hasChanges}
        onAddLineClick={handleAddLine}
        onSaveClick={handleSaveClick}></Footer>
    </>
  );
};

export default Language;
