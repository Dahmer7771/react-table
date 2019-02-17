
let Table = () => { return (
    <GoodTable>
        <tbody>
            {tableParams.height.map((height, index) => {
                    return (
                        <tr key = {index}>
                                {tableParams.width.map((width, index) => {
                                    return (
                                        <td key = {index}></td>
                                    )
                                })}
                        </tr>
                    )
            })}
        </tbody>
    </GoodTable>
)};