import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}


const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.type}</td>
                <td><button
                  onClick={() => props.removeCharacter(index)}
                >Delete</button></td>

{/* onClick={() => props.removeCharacter(index.id)} */}
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}






const Table = (props) => {
    const { characterData, removeCharacter} = props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
               
            </table>
        );
}


export default Table;