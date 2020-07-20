const initialState = {
  products: [
      {id: 1, title: 'პასტა ალფრედო თეთრი სოუსით', description: 'იტალიის მაკარონის კერძი ახალი ფეტვისცინის შემწვარი კარაქით და პარმეზანური ყველით', price: '11.00', image: 'https://images.unsplash.com/photo-1579065604107-61611b052665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', amount: 99},
      {id: 2, title: 'სოკოს წვნიანი', description: 'სოკო ნიორით, ჯანჯაფილით, კაფსკით, ხახვითა და მწვანე ჩილით', price: '18.43', image: 'https://images.unsplash.com/photo-1512003867696-6d5ce6835040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', amount: 99},
      {id: 3, title: 'სოკო Do-piaza', description: 'სოკო ხახვითა, პომიდორით, ნიორით და კაშხლით', price: '19.00', image: 'https://images.unsplash.com/photo-1530632789071-8543f47edb34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', amount: 99},
      {id: 4, title: 'ომლეტი ', description: 'გახეხილი ჭედარის ან გრუიერის ყველი, არაჟანი, ცეხვილი ლორი, გახეხილი ბეკონი, სოუსიანი სოკო, ზეთის წიწაკა ან პომიდორი, კარამელიზებული ხახვი, ახალი მწვანილი', price: '4.99', image: 'https://images.unsplash.com/photo-1513640043734-708351c5cb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', amount: 99}
  ]
};

const productReducer = (state = initialState, action) => {

    return state;
};

export default productReducer;