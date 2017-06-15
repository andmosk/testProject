/**
 * Created by andriy.moskaliuk on 15.06.2017.
 */
import React from 'react';

const getTime= (str) => {
  const date = new Date(Date.parse(str));
  console.log(date);
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
};

export default ({file}) => {
    console.log(file);
    return (
        <tr>
            <td>{file.name}</td>
            <td>{file.birthTime ? getTime(file.birthTime) : ''}</td>
            <td>{file.size ? `${file.size} KB` : ''} </td>
        </tr>
    )
}