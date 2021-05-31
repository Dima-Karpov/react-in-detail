import React, { useCallback, useMemo, useState } from "react"

export default {
    title: 'use Callback'
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback');
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['Reack', 'JS', 'CSS', 'HTML']);

    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [books]);

  
    const memoizedAddBook = useCallback(() => {
            console.log(books)
            const newUsers = [...books, 'Redux' + new Date().getTime()]
            setBooks(newUsers);
        }, [books]);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Book books={newArray} addBook={memoizedAddBook} />
        </>
    )
};

type BooksSecretTypeProps = {
    books: Array<string>
    addBook: () => void
};

const BooksSecret = (props: BooksSecretTypeProps) => {
    console.log('Book SECRET');

    return (
        <div>
            <button onClick={() => props.addBook()}>add Book</button>
            {
                props.books.map((b, i) => <div key={i}>{b}</div>)
            }
        </div>
    )
};

const Book = React.memo(BooksSecret);
