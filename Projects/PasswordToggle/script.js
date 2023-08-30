let eye = document.getElementById('eye')
let password = document.getElementById('password')

eye.onclick = function()
{
    if (password.type == 'password')
    {
        password.type = 'text';
        eye.src = 'images/eye-open.png'
    }
    else
    {
        password.type = 'password';
        eye.src = 'images/eye-close.png'
    }
}