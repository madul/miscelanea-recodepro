import reportWebVitals from '../reportWebVitals';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from  '../pages/Main/Main'; 

function User (){
  return(
    <>
      <Header/>
      <Main />
      <Footer/>
    </>
  )
}
export default User;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
O NextJS trabalha com o conceito de páginas, na sua contrução e roteamento. 
Assim, esse index dentro da pasta pages é o 'primeiro' arquivo a ser rodado ao chamar yarn dev. Ele pré renderiza todos os arquivos antes de consumí-los no browser.

*/