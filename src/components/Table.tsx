import { useState, useMemo, useCallback } from "react";

const TableList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const recordPerPage = 3;

    const records = [
        { id: 1, name: 'record 1', address: 'Delhi' },
        { id: 2, name: 'record 2', address: 'Bihar' },
        { id: 3, name: 'record 3', address: 'Mumbai' },
        { id: 4, name: 'record 4', address: 'Delhi' },
        { id: 5, name: 'record 5', address: 'UP' },
        { id: 6, name: 'record 6', address: 'Rajisthan' },
        { id: 7, name: 'record 7', address: 'Odhisha' },
        { id: 8, name: 'record 8', address: 'UP' },
        { id: 9, name: 'record 9', address: 'Bihar' },
        { id: 10, name: 'record 10', address: 'Madhparesh' }
    ];

    const filterResult = useMemo(() => {
        return records.filter((record) => 
            record.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [records, searchTerm]);

    const currentRecords = useMemo(() => {
        const indexOfLastRecord = currentPage * recordPerPage;
        const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
        return filterResult.slice(indexOfFirstRecord, indexOfLastRecord);
    }, [filterResult, currentPage, recordPerPage]);

    const totalPage = Math.ceil(filterResult.length / recordPerPage);

    const handleChange = useCallback((pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPage) {
            setCurrentPage(pageNumber)
        }
    }, [totalPage, setCurrentPage]);

    return(
        <>
            <div>
                <input type="text"
                    value={searchTerm}
                    placeholder="Search..."
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                    }} />
            </div>
            <table width="100%" border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                {currentRecords.length ? (
                    currentRecords.map((record) => (
                        <tr key={record.id}>
                        <td>{record.name}</td>
                        <td>{record.address}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={2} style={{ textAlign: "center", color: "red" }}>
                        No records found
                        </td>
                    </tr>
                )}
            </table>

            <div>
                <button type="button"
                    onClick={() => handleChange(currentPage - 1)}
                    disabled={currentPage === 1}>
                        Prev
                    </button>
                <button type="button"
                    onClick={() => handleChange(currentPage + 1)}
                    disabled={currentPage === totalPage}>
                        Next
                    </button>
            </div>
        </>
    )
}

export default TableList;