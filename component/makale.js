/**
 * Bu elementi kendimiz oluşturuyoruz. HTML deçalışacağı için 
 * HTML element class ından extends oluyoruz.
 */
class Makale extends HTMLElement{
    /**
     * HTML sınıfının consturctor ını çağırıyoruz.
     */
    constructor(){
        super();
    }
    /**
     * Oluşturucağımız elementim HTML taglarını giriyoruz.
     */
    connectedCallback(){
        this.innerHTML = `<h2>`+this.getAttribute('baslik')+`</h2>`;
        
        this.innerHTML += `<p>`+this.getAttribute('icerik')+`</p>`;
    }
}
/**
 * Burada kendi bileşeninize isim verirken Büyükharf ile
 * isimlendirme yapmayın. çalışmayacaktır.
 */
customElements.define("makale-elementi", Makale);