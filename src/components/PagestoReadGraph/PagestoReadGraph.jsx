import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={`M${x},${y + height} C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y} C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}`} stroke="none" fill={fill} />;
};

const PagestoReadGraph = () => {
    const data = useLoaderData();

    if (!data) {
        return <div>Loading...</div>;
    }

    
    const chartData = data.map(book => ({
        name: book.bookName,
        Pages: book.totalPages 
    }));

    if (chartData.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <ResponsiveContainer width="100%" height={500} className='mt-10'>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='name' label={{ value: 'Books', position: 'insideBottom', offset: 0 }} />
                <YAxis label={{ value: 'Pages', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="Pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

TriangleBar.propTypes = {
    fill: PropTypes.object.isRequired,
    x: PropTypes.object.isRequired,
    y: PropTypes.object.isRequired,
    width: PropTypes.object.isRequired,
    height: PropTypes.object.isRequired,
}

export default PagestoReadGraph;
