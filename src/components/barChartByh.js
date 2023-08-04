const BarChartByh = (props) => {
  const data = props.data;

  return (
    <div className="Contents2">
      <div className="Title">Table2</div>
      <div className="Chart">
        <table>
          <thead>
            <tr>
              <th style={{ width: "10%" }}>병동</th>
              <th>병상이용율</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td style={{ width: "13%" }}>{row.Ward}</td>
                <td>
                  <div className="bar-container">
                    <div className="bar" style={{ width: `${row.OccupancyRate * 100}%` }}></div>
                    <div className="percentage">{Math.round(row.OccupancyRate * 100)}%</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BarChartByh;
