import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Todo = () => {
  const [inputContent, setInputContent] = useState('');
  const [content, setContent] = useState([]);

  const handleAddContent = () => {
    console.log(inputContent);
    if (inputContent) {
      setContent([...content, { text: inputContent, completed: false }]);
      setInputContent('');
    }
    toast.success('Successfully posted !')
  };
  const handleDeleteContent = (index) => {
    const updatedContent = [...content];
    // console.log("16",content);
    // content having all entry of user
    updatedContent.splice(index, 1);
    // console.log('19',index); start from 0 
    setContent(updatedContent);
    toast('what? you deleted!',
    {
      icon: '👀',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );
  };

  const handleCompleteContent = (index) => {

    const updatedContent = [...content];
    // console.log("27",content);
   
    updatedContent[index].completed = !updatedContent[index].completed;
    setContent(updatedContent);
    toast('done!', {
      icon: '👏',
    });
  };




  return (
    <div className='page'>
      <nav className='todo-header'>
        <div className="row">
          <div className="col-md-4 ms-auto m-5">
            <div className="card shadow" style={{ backgroundColor: 'ButtonHighlight', padding: 20 }}>

              <h4 className='text-center'>todo list</h4>
              <div className=" d-flex">
                <input type="text" value={inputContent}
                  onChange={(e) => setInputContent(e.target.value)}
                  placeholder="Enter task" className='form-control' />
                <button className="btn btn-dark mx-2" onClick={handleAddContent}>
                  add
                </button>
              </div>
              <div id="content-container">
                {content.map((item, index) => (
                  <div key={index} className='d-flex justify-conteny-between align-items-center my-3'>
                    <h5 style={{ textDecoration: item.completed ? 'line-through' : 'none' }}className={item.completed ? "text-success" : ""}>{item.text}</h5>
                    <i className="fa-solid fa-trash fa-beat fa-xl ms-auto"  onClick={() => handleDeleteContent(index)}></i>
                    <i className="fa-solid fa-square-check fa-beat fa-xl mx-3"   onClick={() => handleCompleteContent(index)}> </i>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </nav>

    </div>
  )
}

export default Todo