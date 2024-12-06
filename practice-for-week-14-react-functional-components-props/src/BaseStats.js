import "./BaseStats.css"

export default function BaseStats({stats: {hp, attack, defense, speed}, clicker}) {
    
    return (
        <div className="base-stats">
            <h1>BaseStats</h1>
            <button className="sp-stats" onClick={clicker}>Click</button>
            <table>
                <tbody>
                    <tr>
                        <th>Hit Points</th>
                        <td>{hp}</td>
                    </tr>
                    <tr>
                        <th>Attack</th>
                        <td>{attack}</td>
                    </tr>
                    <tr>
                        <th>Defense</th>
                        <td>{defense}</td>
                    </tr>
                    <tr>
                        <th>Speed</th>
                        <td>{speed}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}