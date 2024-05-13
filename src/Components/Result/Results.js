import "./Result.css";
import fakeData from "../Mock_Score.json";
import * as React from "react";
import { useTable } from "react-table";
import axios from "axios";
import LoginSignup from "../LoginSignup/LoginSignup1";
import { globalVariable } from "../globalVariables";
import { IconName } from 'react-icons/tfi';


console.log(LoginSignup);
const email = globalVariable.email;
function App() {

    // const data = React.useMemo(() => fakeData, []);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            // const email = LoginSignup.email;
            console.log(LoginSignup);

            // const name = globalVariable.name;
            // const email = globalVariable.email;
            console.log(email);
            //console.log(response.data);
            try {
                const response = await axios.get(`https://mock-api-template-5.onrender.com/score?email=${email}`);
                setData(response.data);
                console.log(email);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    const columns = React.useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "Name",
                accessor: "name",
            },
            {
                Header: "Email",
                accessor: "email",
            },
            {
                Header: "Date",
                accessor: "date",
            },
            {
                Header: "Score",
                accessor: "score",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    return (
        <div className="App">
            <div className="container">
                <h2>Quiz Performance Overview</h2>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;