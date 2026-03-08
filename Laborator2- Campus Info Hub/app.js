async function loadResources() {
  const resourceList = document.getElementById('resource-list');
  const studyList = document.getElementById('study-list');
  const tagList = document.getElementById('tag-list');

  try {
    const response = await fetch('data/resources.json');
    if (!response.ok) {
      throw new Error('Nu s-au putut încărca datele din JSON.');
    }

    const resources = await response.json();

    resourceList.innerHTML = resources
      .map(
        (resource) => `
          <li>
            <strong>${resource.name}</strong><br>
            Tip: ${resource.type}<br>
            Locație: ${resource.location}<br>
            Program: ${resource.program}
          </li>`
      )
      .join('');

    const studyResources = resources.filter((resource) =>
      resource.type === 'study' || resource.tags.includes('studiu')
    );

    studyList.innerHTML = studyResources.length
      ? studyResources
          .map(
            (resource) => `
              <li>
                <strong>${resource.name}</strong> - ${resource.location}
              </li>`
          )
          .join('')
      : '<li>Nu există resurse de studiu disponibile.</li>';

    const uniqueTags = [...new Set(resources.flatMap((resource) => resource.tags))].sort();

    tagList.innerHTML = uniqueTags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join('');
  } catch (error) {
    resourceList.innerHTML = `<li>${error.message}</li>`;
    studyList.innerHTML = `<li>${error.message}</li>`;
    tagList.innerHTML = `<span class="tag">Eroare la încărcare</span>`;
  }
}

loadResources();
