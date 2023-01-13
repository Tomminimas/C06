function countBooksOfPublisher(books) {
    let count = 0
    for (let i = 0; i < books.length; i++) {
        if (books[i].provider == "Fahasha" )
            count++
    }
    return count
}
function getAvaeragePrice(books) {
    let s = 0
    for (let i = 0; i < books.length; i++) {
        s = s + books[i].price
    }
    return s
    }
function findMaxPrice(books) {
    let max = books[0] 
    for (let i = 0; i < books.length; i++) {
        if (books[i] > max)
            max = books[i]
    }
    return max
}
function isValid(books) {

}
function filterByPrice() {}

function searchByName(books, keyword) {
    let search = new Array()
    for (let i = 0; i < books.length; i++) {
        if (books[i].name == keyword)
            search.push(books[i])
    }
    return search
}

function main() {
    const books = [
        {
          id: 1,
          name: "Luật tâm thức",
          price: 220000,
          provider: "Fahasha",
        },
        {
          id: 2,
          name: "Chiến binh cầu vồng",
          price: 140000,
          provider: "Fahasha",
        },
        {
          id: 3,
          name: "Nghệ thuật tập trung",
          price: 90000,
          provider: "Tuổi trẻ",
        },
        {
          id: 4,
          name: "Bye Béo",
          price: 305000,
          provider: "Kmin Books",
        },
        {
          id: 5,
          name: "Sát thủ bán hàng",
          price: 180000,
          provider: "Fahasha",
        },
        {
          id: 6,
          name: "Hoàng tử bé",
          price: 50000,
          provider: "Kmin Books",
        },
        {
          id: 7,
          name: "Tâm lý học tội phạm",
          price: 400000,
          provider: "Kmin Books",
        },
        {
          id: 8,
          name: "Hiểu về trái tim",
          price: 130000,
          provider: "Tuổi trẻ",
        },
      ];

    const count = countBooksOfPublisher(books)
    console.log('So luong sach cua nxb FAHASA', count);

    const average = getAvaeragePrice(books).s / books.length 
    console.log('Trung binh cong gia ban', average)
    
    const maxPrice = findMaxPrice(books)
    console.log('ID cua quyen sach co gia cao nhat la: ', maxPrice)

    const search = searchByName(books, "Luật tâm thức")
    console.log(search)
}

main()
