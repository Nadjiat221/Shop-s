import {useState} from 'react'
import { Link } from 'react-router-dom';

const AddTask = ({  onAdd }) => {
    
    
    const [itemName, setItemName] = useState('')
    const [itemPrice, setitemPrice] = useState('')
    const [version , setVersion] = useState('')
    const [img, setImg] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!itemName) {
            alert('please add an item')
            return
        }
        onAdd ({ itemName, itemPrice, version, img })
        setItemName('')
        setitemPrice('')
        setVersion('')
        setImg('')
    }
    return (
        <div>
            <form className='add-form' onSubmit={onSubmit} >
                <div className='form-control'>

                    <input type='file' 
                        value={img} onChange={(e) =>
                            setImg(e.target.value)} />
                           
                </div>


                <div className='form-control'>
                    <label>Item Name</label>
                    <input type='text' placeholder='Add item'
                        value={itemName} onChange={(e) =>
                            setItemName(e.target.value)}  />
                </div>
                <div className='form-control'>
                    <label>version</label>
                    <input type='text' placeholder='version'
                        value={version} onChange={(e) =>
                            setVersion(e.target.value)}  />
                </div>
                <div className='form-control'>
                    <label>Item Price</label>
                    <input type='number' placeholder='$0'
                        value={itemPrice} onChange={(e) =>
                            setitemPrice(e.target.value)}  />
                </div>

                <input type='submit' value='Add Item' className='btn btn-block'  />
                 <Link  to ='/' className='btn btn-block'>Go BACK TO HOMEPAGE </Link>



            </form>
        </div>
    )
}

export default AddTask
