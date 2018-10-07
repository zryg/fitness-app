import expensesReduer from  '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
    const state = expensesReduer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReduer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReduer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '123',
        description: 'Cell Phone',
        note: '',
        amount: 5500,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReduer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const note = 'Juicy Fruit';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note
        }
    };
    const state = expensesReduer(expenses, action);
    expect(state[0].note).toBe(note);
});

test('should not edit expense if expense is not found', () => {
    const note = 'Juicy Fruit';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note
        }
    };
    const state = expensesReduer(expenses, action);
    expect(state).toEqual(expenses);
});