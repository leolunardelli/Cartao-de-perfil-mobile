const linksSocialMedia = {
    github: 'https://github.com/leolunardelli',
    instagram: 'https://www.instagram.com/leo.lunardelli',
    linkedin: 'https://www.linkedin.com/in/leolunardelli',
    email: 'mailto:leo.luna94@gmail.com'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos(){
    const url = `${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        git.textContent = data.login
        userBio.textContent = data.bio
        userImage.src = data.avatar_url
        userLink.textContent.href = data.html_url
        userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
