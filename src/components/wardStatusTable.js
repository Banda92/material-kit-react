import React from 'react';
import styles from './wardStatusTable.module.scss' // SCSS module 파일 경로로 수정해주세요

const WardStatusTable = ({ data }) => {
  const colors = ["#6366F1", "#4CCBA1", "#F25B51", "gray"];
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>병동</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.Ward}>
            <td>{item.Ward}</td>
            <td className={`${styles['status-cell']}`}>
              <div className={styles.boxCont}>
                <div className={styles.boxEach}>
                  {item.Value.split("").map((value, index) => (
                    <React.Fragment key={index}>
                      {index % 20 === 0 && index !== 0 && <br />}
                      <div
                        className={styles.status}
                        style={{
                          backgroundColor: colors[parseInt(value)]
                        }}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WardStatusTable;
