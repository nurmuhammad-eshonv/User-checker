const form = document.querySelector('form');
const template = document.querySelector("template")
const data = []
const ul = document.querySelector('ul')

function updateUi(users){
  ul.innerHTML = ""; 
  users.forEach((user) => {
    const clone = template.content.cloneNode(true)
    
    const image = clone.querySelector('img')
    const name = clone.querySelector('h3')
    const email = clone.querySelector(".email")
    const tel = clone.querySelector(".tel")

    image.src = user.image
    name.textContent = user.name
    tel.textContent  = user.PhoneNumber
    email.textContent = user.email
    
    ul.appendChild(clone)
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newUser = {
    id: Math.random() * new Date().getMilliseconds(), 
    name: form.querySelector('#name').value,
    PhoneNumber: form.querySelector('#number').value,
    email: form.querySelector('#email').value,
    image: form.querySelector('#image').value // Rasm manzili
  };
  data.push(newUser);
  updateUi(data); 
});
