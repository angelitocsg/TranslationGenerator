import React from 'react';

const ImportForm = ({ contentToImport, onImportContentChange, onImportClick }) => (
  <div
    className="modal fade"
    id="importModal"
    tabIndex="-1"
    aria-labelledby="importModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header text-light bg-dark">
          <h5 className="modal-title" id="importModalLabel">
            Import language file
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <textarea
            rows="10"
            className="form-control"
            onChange={onImportContentChange}
            value={contentToImport}
            placeholder='[{"tag":"Enter","grp":"Buttons","en":"Enter","pt":"Entrar","es":"Entrar"}]'></textarea>
        </div>
        <div className="modal-footer bg-light">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" className="btn btn-dark" onClick={onImportClick}>
            Import
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ImportForm;
