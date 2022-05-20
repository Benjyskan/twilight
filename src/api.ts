import { apiPath } from './const'

type Method = "GET" | "POST" | "PATCH" | "DELETE"

const getHeader = (method: Method): RequestInit => ({
	method,
	headers: new Headers(),
	mode: "cors",
	cache: "default",
})

export async function getTechs() {
	const header = getHeader("GET")
	console.log(apiPath);
	const res = await fetch(`${apiPath}/twilight`, header);
	const data = await res.json();
	console.log("fetched data:", data);
}

export async function postTech() {
	const header = getHeader("POST")
	console.log(apiPath);
	const res = await fetch(`${apiPath}/twilight`, header);
	const data = await res.json();
	console.log("post response:", data);
}