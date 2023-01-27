const linksSocialMedia = {
    youtube: 'leolunardelli',
    instagram: 'leo.lunardelli',
    linkedin: 'in/leolunardelli',
    email: 'mailto:leo.luna94@gmail.com'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos(){
    const url =  `https://api.github.com/users/${LinksSocialMedia.github}`

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
