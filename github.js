class GitHub {
  constructor() {
    this.client_id = 'ccf54cdc6f6771af1d27';
    this.client_secret = '5e712290e786d9efbde9ce3c323c2876ef619d37';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {

    const profileResponse =  await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse =  await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return{
      profile, 
      repos
    }
  }
}