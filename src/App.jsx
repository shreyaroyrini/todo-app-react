import React, { useState } from 'react';
import ToDoList from './ToDoList';
const App = () => {

    const[inputList, setInputList] = useState();
    const[Items , setItems] = useState( [ ]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }
    const listOfItems = () => {
        setItems( (oldValue) => {
            return [ ...oldValue , inputList]
        });
        setInputList(" ");

    }
    const deleteItems = (id ) => {
        console.log('deleted');

        setItems( (oldItems) => {
            return oldItems.filter( (arrElem , index ) => {
                return index !== id ;
            })
        })

    }
    return( 
        <>
        <div className = 'main_div'>
        <div className = 'center_div'>
        <br />
        <h1> ToDo App</h1>
        <br />
        <input  type = 'text' placeholder = 'Add a Items'
        value = {inputList}
         onChange = {itemEvent}/>
        <button onClick = {listOfItems}> + </button>
        <ol>
            {/* <li> {inputList} </li> */}
            {Items.map ( (itemvalues , index) => {
                return(
                <ToDoList
                key = {index}
                id = {index} 
                 text = {itemvalues} 
                     onSelect = {deleteItems}
                 /> );
            })}
        </ol>
            
            </div>
        </div>


        </>
    );

}
export default App ;








// import React from 'react';
// const SlotM = (props) => {
//      let x = props.x;
//      let y = props.y;
//      let z = props.z;


//     if (x === y &&  y === z )  {
//         return(
//             <>
//                 <div>
//                 <h1> {x} {y} {z} </h1>
//                 <h1> This is Matching</h1>
//                 </div> 
//             </>
//         );
//     }
//     else{
//         return(
//             <>
//                 <div>
//                 <h1> {x} {y} {z} </h1>
//                 <h1> This is  not Matching</h1>
//                 </div> 
//             </>
//         );

//     }

// }
// const App = () => {
//     return(
//         <>
//             <h1 className = "heading_style"> Welcom to <span style = {{fontWeight:"bold"}}> Slot machine game</span>
//         </h1>
//         <div className = 'slotmachine'>
//         <SlotM  x = '*'   y = '*'  z = '*'/>
//         <SlotM    x = '*' y = '*' z = '*'/>
//         <SlotM    x = '*' y = '*' z = '*'/>
//         </div>
//         </>
//     );
// }
// export default App;








// // 
// // import Heading from './Heading';
// // import List from './List';
// // import Para from './Para';
// // function  App(){
// //     return (
// //         <>
// //             <Heading /> 
// //             <Para />
// //             <List />
// //         </>
// //     );
// // }
// // export default App;