const linksSocialMedia = {
    github: 'leolunardelli',
    linkedin: "/in/leolunardelli",
    facebook: "leonardo.lunardelli",
    instagram: "leo.lunardelli",
    twitter: "Llunardell1"
}

function changeSocialMediaLinks(){
      for (let li of socialLinks.children){
      const social = li.getAttribute("class")

      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
      }
}

changeSocialMediaLinks()

function getGithubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        git.textContent = data.login
        bioProfile.textContent = data.bio
        userImage.src = data.avatar_url
        userLink.textContent.href = data.html_url
        userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
