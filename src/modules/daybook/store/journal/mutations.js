// export const myAction = ( state ) => {

// }
export const setEntries = ( state, entries ) => {
    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false
}

export const updateEntry = ( state, entry ) => { // Entry actualizada
    // state.entries => un arreglo...
    // Extraemos un arreglo solo con los ids y buscamos el id del entry
    const idx = state.entries.map( e=> e.id ).indexOf( entry.id )
    state.entries[ idx ] = entry
}

export const addEntry = ( state, entry) => {
    // state -> entries  -> nueva entrada debe ser la primera
    state.entries = [ entry, ...state.entries ]
}
export const deleteEntry = ( state, id ) => {
    // remover del state.entries borrar la entrada que concida con ese ID
    state.entries = state.entries.filter( entry => entry.id !== id )

}
