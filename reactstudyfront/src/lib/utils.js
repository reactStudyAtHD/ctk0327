const getTitleTemp = (input) => {
    const total = parseInt(input.cardSales) + parseInt(input.moneySales) + parseInt(input.serviceSales);
    const per = total / parseInt(input.tableCount);
    return `총 매출: ${total}원
            객 단가: ${per}원
            `;
};

const getDateTemp = (input) => {
    const [year,month,date]=input.saleDate.split('-');
    return new Date(year,month-1,date);
};
export const getTitle=getTitleTemp;
export const getDate=getDateTemp;
