import { useState } from 'react';
import SearchIcon from '../public/image/icon/util/search.svg';

export default function SearchBar({ targets, action }) {
    const [text, setText] = useState('');
    const handleChangeText = function (e) {
        setText(e.target.value);
    };
    const handlePressEnter = function (e) {
        e.key === 'Enter' && action(targets, text);
    };

    return (
        <div className="p-8">
            <div className="flex items-center">
                <input
                    className="w-full p-3 leading-tight outline-black placeholder-gray-400"
                    placeholder="記事を検索"
                    value={text}
                    onChange={handleChangeText}
                    onKeyPress={handlePressEnter}
                />
                <div className="p-4">
                    <button
                        className="bg-black p-2 hover:bg-yellow-400 focus:outline-none w-12 h-12 flex items-center justify-center"
                        onClick={() => action(targets, text)}>
                        <SearchIcon width="26px" height="26px" />
                    </button>
                </div>
            </div>
        </div>
    );
}