import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div className="container-fluid text-center">
        {/*<ExpensesSummary />*/}
        {/*<ExpenseListFilters />*/}
        {/*<ExpenseList />*/}
        <h1 className="mt-4">Page for users to see their programs created by Brian</h1>
        <h4 className="mt-5">Exercise 1</h4>
        <h4 className="mt-2">Bench Press</h4>
        <p className="mt-1">Example paragraph where Brian can describe the next workout</p>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Set</th>
                <th scope="col">Weight</th>
                <th scope="col">Reps</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>250</td>
                <td>8</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>275</td>
                <td>4</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>315</td>
                <td>1</td>
            </tr>
            </tbody>
        </table>


        <h4 className="mt-5">Exercise 2</h4>
        <h4 className="mt-2">Incline Bench Press</h4>
        <p className="mt-1">Example paragraph where Brian can describe the next workout</p>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Set</th>
                <th scope="col">Weight</th>
                <th scope="col">Reps</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>80</td>
                <td>8</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>80</td>
                <td>8</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>80</td>
                <td>failure</td>
            </tr>
            </tbody>
        </table>
    </div>
);

export default ExpenseDashboardPage;