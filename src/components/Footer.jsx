import React from 'react';

const Footer = ({ hasChanges, onAddLineClick, onSaveClick }) => (
  <footer className="footer fixed-bottom py-3 bg-light">
    <div className="container d-flex justify-content-between">
      <div className="btn-group btn-group-sm" role="group">
        <button type="button" className="btn btn-dark" onClick={onAddLineClick}>
          Add line
        </button>
        <button
          type="button"
          className={hasChanges ? 'btn btn-danger' : 'btn btn-secondary'}
          onClick={onSaveClick}>
          Save
        </button>
      </div>
      <div className="pt-1 small">
        Created by{' '}
        <a href="https://github.com/angelitocsg/TranslationGenerator">Angelito Casagrande</a>
      </div>
    </div>
  </footer>
);

export default Footer;
