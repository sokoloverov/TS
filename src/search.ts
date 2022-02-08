export function searchFormCollect() {

    interface SearchFormData {
        dataBegin: string
        dataEnd: string
        maxPrice: string
    }

    const searchData: SearchFormData = {
      dataBegin: '',
      dataEnd: '',
      maxPrice: ''
    }

    const checkin = document.querySelector('input[name="checkin"]').innerHTML;
    const checkout = document.querySelector('input[name="checkout"]').innerHTML;
    const price = document.querySelector('input[name="price"]').innerHTML;

    searchData.dataBegin = checkin;
    searchData.dataEnd = checkout;
    searchData.maxPrice = price;

    return searchData;
}

