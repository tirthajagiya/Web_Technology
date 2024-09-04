function Header(props) {
    let temp = "";
    let by = props.by;
    return (
            // for(let i=0;i<props.props;i++) {
            //     temp += by
            // }
            // {props.by == "undifined" && <button>X</button>}
            // {!props.by == "undifined" && <h2>{temp}</h2>}
    );
}
function Footer() {
    return (<h2>**********</h2>);
}

function Form(props) {
    return (
        <table>
            <tr>
                <td>
                    <label>Username : </label>
                </td>
                <td>
                    <input type="text"></input>
                </td>
            </tr>

            <tr>
                <td>
                    <label>Password : </label>
                </td>
                <td>
                    <input type="text"></input>
                </td>
            </tr>
            <tr>
                <td>
                    {props.add == "true" && <button>Add</button>}
                    {props.add == "false" && <button>Edit</button>}
                </td>
            </tr>
        </table>
    );
}

export { Header, Footer, Form };