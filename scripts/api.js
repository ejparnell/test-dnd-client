import { store } from './store.js'

// User actions
export const signUp = (data) => {
	return fetch(`https://ancient-reef-44528.herokuapp.com/sign-up`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

export const signIn = (data) => {
	return fetch(`https://ancient-reef-44528.herokuapp.com/sign-in`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

// Character Actions
export const indexCharacters = () => {
	return fetch(`https://ancient-reef-44528.herokuapp.com/characters`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const showCharacter = (id) => {
	return fetch(`https://ancient-reef-44528.herokuapp.com/characters/${id}`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const updateCharacter = (data, id) => {
	return fetch(`https://ancient-reef-44528.herokuapp.com/characters/${id}`, {
		method: 'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${store.userToken}`,
		},
		body: JSON.stringify(data),
	})
}

export const deleteCharacter = (id) => {
	return fetch(`https://ancient-reef-44528.herokuapp.com/characters/${id}`, {
		method: 'DELETE',
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

// Campaign Actions
export const indexCampaign = () => {
	return fetch('https://ancient-reef-44528.herokuapp.com/campaigns', {
		headers: {
			'Authorization': `Bearer ${store.userToken}`
		}
	})
}

export const showCampaign = (id) => {
	return fetch(`https://ancient-reef-44528.herokuapp.com/campaigns/${id}`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const updateCampaign = (data, id) => {
	return fetch(`https://ancient-reef-44528.herokuapp.com/campaigns/${id}`, {
		method: 'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${store.userToken}`,
		},
		body: JSON.stringify(data),
	})
}

export const deleteCampaign = (id) => {
	return fetch(`https://ancient-reef-44528.herokuapp.com/campaigns/${id}`, {
		method: 'DELETE',
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}
