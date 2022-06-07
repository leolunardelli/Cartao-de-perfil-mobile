const linksSocialMedia = {
    github: 'leolunardelli',
    youtube: "channel/UCA7U-deMYMaKOvvVEEg67LA",
    facebook: "leonardo.lunardelli",
    instagram: "leo.lunardelli",
    twitter: "Llunardell1"
  }

  function changeSocialMediaLinks(){
      for (let li of socialLinks.children){
      const social = li.getAttribute("class")

      li.children[0].href = `https:${social}.com/${linksSocialMedia[social]}`
      }
  }

  changeSocialMediaLinks()