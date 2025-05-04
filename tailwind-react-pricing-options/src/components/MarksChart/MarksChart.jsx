import React, {use} from 'react';

const MarksChart = ({marksPromise}) => {

    const marksDataRes = use(marksPromise);
        const marksData = marksDataRes.data;

        //  data processing for the chart 
        const marksChartData = marksData.map(studentData => {
            const student = {
                id: studentData.student_id,
                name: studentData.name,
                physics: studentData.marks.physics,
                chemistry: studentData.marks.chemistry,
                math: studentData.marks.math

            }
            return student;
        })

        console.log(marksChartData);

    return (
        <div>
            
        </div>
    );
};

export default MarksChart;