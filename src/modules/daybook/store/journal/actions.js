import journalApi from "@/api/journalApi"
// export const myAction = async ({ commit }) => {

// }
export const loadEntries = async ( { commit } ) => {
    const { data } = await journalApi.get('/entries.json')

    if ( !data ) {
        return commit( 'setEntries', [] )
    }
        
    const entries = []
    for( let id of Object.keys( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
    }
    commit( 'setEntries', entries )
}
export const updateEntry = async ({ commit }, entry) => { // entry debe de ser un parámetro
    // Extraer lo que necesitamos // -id
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }
    
    const resp = await journalApi.put( `/entries/${ entry.id }.json`, dataToSave )
    console.log(resp)
    //Commit de una mutation---> llamada updateEntry
    commit('updateEntry', { ...entry })
}

export const createEntry = async ({ commit }, entry) => {
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }
    const { data } = await journalApi.post( `/entries.json`, dataToSave )
    // data = {"name": "-NATWbjo1MpYwQ-GbF6x"}
    // Establecer el id(data) a entry.id
    // commit -> addEntry
    dataToSave.id = data.name
    commit('addEntry', dataToSave)

    return data.name
}
export const deleteEntry = async ({ commit }, id) => {
    await journalApi.delete(`/entries/${ id }.json`)
    commit('deleteEntry', id)
    return id
}