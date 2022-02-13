interface TodosElement {
    userId: number
    id: number
    title: string
    complete: boolean
}

interface TodoResponse {
    items: TodosElement[]
    totalCount: number
}

export function getTodosByCount(url: string) {

    return fetch(url)
        .then<string>((response) => {
            return response.text()
        })
        .then<TodoResponse>((responseText) => {
            return JSON.parse(responseText)
        })
        .then((data) => {

            let size = 0
            let key: string
            for (key in data) {
                // eslint-disable-next-line no-prototype-builtins
                if (data.hasOwnProperty(key)) size++;
            }
            console.log('size ', size);
            return size
        })
}


