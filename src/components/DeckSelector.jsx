import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function DeckSelector({deckList, setCurrentDeck}) {
    const [deck, setDeck] = useState("");

    const handleChange = (event) => setDeck((prev) => {
        const selectedDeck = event.target.value;
        setCurrentDeck(prev => selectedDeck);
        return selectedDeck;
    });

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Decks</InputLabel>
            <Select
                labelId="deck-select-small"
                id="deck-select-small"
                value={deck}
                label="Deck"
                onChange={handleChange}
            >
                <MenuItem value="" key="">
                <em>None</em>
                </MenuItem>
                {deckList.map(selectedDeck => {
                    const {deckName} = selectedDeck;
                    return <MenuItem value={selectedDeck} key={deckName}>{deckName}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}

export default DeckSelector;