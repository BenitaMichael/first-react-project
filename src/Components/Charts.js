

export default function Charts(){
    return(
        <div className="charts">
            <div className="split">
                <img src="/Images/accounting-cashflow 1.png" alt="cashflow" />
                <div className="chart-text">
                    <h2>Accounting software that works <br/>as hard as you do</h2>
                    <button className="free">FREE</button>
                    <p>Truly understand and manage your income and expenses. Track everything and connect to other Wave products such as payroll, payments, and invoicing. Everything is automated and in one perfect package.</p>
                <button className="learn">Learn about accounting</button>
                </div>
            </div>

            <div className="split">
                <div className="chart-text">
                    <h2>Create professional invoices <br/>for free</h2>
                    <button className="free">FREE</button>
                    <p>Every invoice paid is positive incoming revenue for your business. Dime's invoice software enables you to easily create and send professional invoices, with advanced features like recurring billing and automatic payments.</p>
                    <button className="learn">Learn about invoices</button>
                </div>
                <img src="/Images/invoice-example 1.png" alt="invoice" />
            </div>

            <div className="charts-button">
                <a href="#">Create your free Dime account</a>
                <button className="start">Start Now</button>
            </div>
        </div>
    )
}