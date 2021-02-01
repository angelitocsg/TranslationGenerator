import React from 'react';

const Table = ({ content, onChange, onCreateClick, onDeleteClick, onFormChange }) => {
  return (
    <form className="needs-validation was-validated" onChange={onFormChange}>
      <table className="table table-borderless table-sm">
        <thead>
          <tr>
            <th>Tag name</th>
            <th>English</th>
            <th>Português</th>
            <th>Español</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {content.map((it, index) => (
            <tr key={index}>
              <td>
                <div className="input-group input-group-sm">
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteClick(it.id)}>
                    Delete
                  </button>
                  <input
                    required="required"
                    autoComplete="false"
                    autoCorrect="false"
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Tag without special chars"
                    name="tag"
                    value={it.tag}
                    onChange={(e) => onChange(e, it.id)}
                  />
                </div>
              </td>
              <td>
                <div className="input-group input-group-sm">
                  <input
                    required="required"
                    autoComplete="false"
                    autoCorrect="false"
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="English"
                    name="en"
                    value={it.en}
                    onChange={(e) => onChange(e, it.id)}
                  />
                  <button
                    type="button"
                    className="btn btn-dark btn-sm"
                    onClick={() => onCreateClick(it)}>
                    Create
                  </button>
                </div>
              </td>
              <td>
                <div className="input-group input-group-sm">
                  <input
                    required="required"
                    autoComplete="false"
                    autoCorrect="false"
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Português"
                    name="pt"
                    value={it.pt}
                    onChange={(e) => onChange(e, it.id)}
                  />
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => onChange({ target: { name: 'pt', value: '-' } }, it.id)}>
                    Empty
                  </button>
                </div>
              </td>
              <td>
                <div className="input-group input-group-sm">
                  <input
                    required="required"
                    autoComplete="false"
                    autoCorrect="false"
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Español"
                    name="es"
                    value={it.es}
                    onChange={(e) => onChange(e, it.id)}
                  />
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => onChange({ target: { name: 'es', value: '-' } }, it.id)}>
                    Empty
                  </button>
                </div>
              </td>
              <td>
                <input
                  required="required"
                  autoComplete="false"
                  autoCorrect="false"
                  className="form-control form-control-sm"
                  list="datalistOptions"
                  placeholder="Type group name..."
                  name="grp"
                  value={it.grp}
                  onChange={(e) => onChange(e, it.id)}
                />
                <datalist id="datalistOptions">
                  <option value="Buttons" />
                  <option value="Messages" />
                  <option value="Text block" />
                </datalist>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default Table;
