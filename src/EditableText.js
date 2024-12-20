import { useState } from 'react';
import './EditableText.css';

function EditableText({textIn, parentBlurHandler, id, field, preSupp, postSupp}) {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(textIn)
  
    // TODO: Change logic to auto-focus the input field on double click. e.target defaults to the <p> field currently
    const handleDoubleClick = _ => {
        // e.target.children[0].focus()
        setIsEditing(true);
    };

    const blurHandler = e => {
      // Call parent blur handler only if a valid parent is handed in
      if (typeof parentBlurHandler === "function") {
        parentBlurHandler(e);
      }
      setIsEditing(false);
    }
  
    return (
        <div className="Text" onDoubleClick={handleDoubleClick}>
          { isEditing ? (
            <input type="text" value={text} onChange={e => setText(e.target.value)} onBlur={blurHandler} id={id} field={field}/>
          ) : (
            <p id={id} field={field}>{preSupp}{text}{postSupp}</p>
          )}
        </div>
    );
}

export default EditableText;