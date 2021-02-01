const defaultStorage = {
  content: [
    {
      id: 100,
      tag: 'Enter',
      grp: 'Buttons',
      en: 'Enter',
      pt: 'Entrar',
      es: 'Entrar',
    },
  ],
  languages: [
    {
      id: 'en',
      file: 'en-US',
      name: 'English',
    },
    {
      id: 'pt',
      file: 'pt-BR',
      name: 'Portguês',
    },
    {
      id: 'es',
      file: 'es-ES',
      name: 'Español',
    },
  ],
  groups: ['Texts', 'Messages', 'Buttons'],
  files: {
    default: { name: 'Default (JSON)', filename: 'default.json', data: null },
    javascript: [],
    csharp: [],
  },
};

const browserStorage = localStorage.getItem('Translate');
let currentStorage = { ...defaultStorage };

if (browserStorage !== null) {
  currentStorage = JSON.parse(browserStorage);
}

// ####################### PRIVATE #######################

const getNewId = () => Math.floor(Math.random() * 10000);

const getData = (text, json = true) => {
  return json
    ? 'text/json;charset=utf-8,' + encodeURIComponent(text)
    : 'text/plain;charset=utf-8,' + encodeURIComponent(text);
};

const createExportJS = (data, lang) =>
  `const locale = ${JSON.stringify(
    data.reduce((p, c) => ({ ...p, [c.tag]: c[lang] }), {}),
    null,
    2,
  )}; \nexport default locale;`;

const createExportCSharp = (data, lang) =>
  `${data.reduce((p, c) => `${p}${c.tag}\t${c[lang]}\t${c.grp}\n`, '')}`;

const setDefaultFile = (content) => {
  currentStorage.files.default.data = content;
};

const setLanguageFile = (type, content) => {
  var files = currentStorage.files[type].filter((it) => it.name !== content.name);

  currentStorage.files[type] = [...files, { ...content }];
};

// ####################### PUBLIC #######################

const ClearStorage = () => {
  localStorage.clear();
  currentStorage = { ...defaultStorage };
};

const NewTable = () => {
  if (window.confirm('Clear all and create a new tag table?')) {
    ClearStorage();
  }
};

const SaveTable = () => {
  var sortedContent = currentStorage.content.sort((a, b) =>
    `${a.grp}-${a.tag}` < `${b.grp}-${b.tag}` ? -1 : 1,
  );

  var json_default = JSON.stringify(sortedContent);
  var data_default = `data: ${getData(json_default)}`;
  setDefaultFile(data_default);

  currentStorage.languages.forEach((lang) => {
    var js = createExportJS(sortedContent, lang.id);
    var cs = createExportCSharp(sortedContent, lang);
    var data_js = `data: ${getData(js)}`;
    var data_cs = `data: ${getData(cs, false)}`;
    setLanguageFile('javascript', {
      id: lang.id,
      name: lang.name,
      filename: `${lang.file}.js`,
      data: data_js,
    });
    setLanguageFile('csharp', {
      id: lang.id,
      name: lang.name,
      filename: `${lang.file}(csharp).txt`,
      data: data_cs,
    });
  });

  localStorage.setItem('Translate', JSON.stringify(currentStorage));
};

const ImportTable = (contentToImport) => {
  currentStorage.content = JSON.parse(contentToImport);
};

const ExportTable = () => {};

const AddLine = (grp = '') => {
  var id = getNewId();
  var lastGroup = currentStorage.content[currentStorage.content.length - 1].grp;
  currentStorage.content = [
    ...currentStorage.content,
    { id, tag: `new_${id}`, grp: lastGroup, en: '', pt: '', es: '' },
  ];
};

const UpdateLine = (id, field, value) => {
  currentStorage.content = currentStorage.content.map((it) =>
    it.id === id ? { ...it, [field]: value } : it,
  );
};

const DeleteLine = (id) => {
  currentStorage.content = currentStorage.content.filter((it) => it.id !== id);
  if (currentStorage.content.length === 0) currentStorage.content = defaultStorage.content;
};

const GetContent = () => currentStorage.content;
const GetLanguages = () => currentStorage.languages;
const GetGroups = () => currentStorage.groups;
const GetFiles = () => currentStorage.files;
const ClearFiles = () => (currentStorage.files = defaultStorage.files);

export const Translate = {
  NewTable,
  SaveTable,
  ImportTable,
  ExportTable,
  AddLine,
  UpdateLine,
  DeleteLine,
  GetContent,
  GetLanguages,
  GetGroups,
  GetFiles,
  ClearFiles,
};
