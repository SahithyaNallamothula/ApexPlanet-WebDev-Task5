// script.js
const movies = [
  {
    title: "Avatar",
    genre: "sci-fi",
    image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    description: "A paraplegic Marine explores the alien world of Pandora.",
    cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
    trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY"
  },
  {
    title: "The Pursuit of Happyness",
    genre: "drama",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUSEhAVFRUXFRAVFRUVGBUVFRcQFRYWGBUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGislHyUrKy0wLS0tLS0tLSsrLS8rMS0tLS0tLSstLS0tLS8tLS8tLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAYHBQj/xABGEAACAQIDBQYCBgcGBAcAAAABAgADEQQSIQUTMUFRBgciYXGBkaEUMkJSscEjYoKSosLwFSRzstHxY3LS4RYzQ2SDo7P/xAAaAQACAwEBAAAAAAAAAAAAAAAAAgEDBAUG/8QALREAAgIBAwMCBQQDAQAAAAAAAAECEQMSITEEE0FRYSIycaGxBYGR4cHR8BT/2gAMAwEAAhEDEQA/AOOGhho1FT0hyB3PDzxqHIAczw88bggAsvCzxEEAFZ4ReIhSSBeeDPG4UAHM8LPG7woUA5nhZo3eC8kB3NCvEAw5AB3hEwjCMkAEwrwjCMCA80ESYJNASBDissPLFJExUPLDtIAKC0VaHaACLQERdoMsAGrQiI7lhZZIDJEFo7licsCBu0IiOZYWWSA3aFaOZYMsAEAQ4vLBlgA2YRjhWIIgAgxJiyIkiSQJhwQQA6m6MUMOZolPsxSHHWP4XYyU6tJluDmRjw4Z2W3Hnl+cxPqoovWGRm5w1oKOFLuqDizKovwuxAF/jLAux2qBSjAkutOxuLEqWDX+7ZWN+OnCM4LA5atBwwINamLaBhZlNyt+BB0PkeEs7sfUXQxzGdhsZSQvlRwASQjXaw42BAv6DWcrH7HqUKVGq+XLWXMliSctlPiFtNGE0rG1KGExdXFVMUCxpKn0ddXvZbGwOt8ulwAM3GVvtcmbB4DS36I6Dh9SnM+LqJyaT8/6LsmKMU6OYvYzFGsaF6ecU1qHxHLkZio1y8bqZH2v2XxOFybxAc7BFKHMDUPBeRuZpNRAcdWubA4OmCeg3lXWcTaDjZ9HD4VM9dxUp1gSpAyK2ayHXUkWsL2uSeV0h1M20voTLDFJsrWK7EYunTNQimcq5mRWvUC+lrHgeBPCczH7FqUadGo+XLWXMliSbWU+IW0+sJe6mDpY2pUrYSvVoYoqN4hzISFCgBvLRRoSBppOX2opf3XZ4twpfy0ZZjzzbSf49hJ4opNr/tzjt2OxIqtRvTzrSFY+I23ZZlGuXjdTpHMH2FxdamlVd1ldEdbsQcrAEXGXQ2Mv1Yf3+qf/AGNP/wDWrKp2dp22bjB1C/5REXUZHG9vH3GeKCdfX7FMxeEak702tmRmQ21GZSQbH1EZ3cfrVkQlSdRYtoxChuGZgLLfzkfAO1VnN7KtR0ylCNFsAQxsb3v8febVNceTLT5D3cGSTDRhGlHsUjZIWSSDThZYARzSjb0506FS3EAzpYfBrWsMlvOK51yMo2VRliCJb8T2VNrrOLidjunFTJjki/JLg0cgiCS2wbfdMEe0LTNfwlXOL/jH2rkMpCqbW4sRwJI5aanjI2A00k91BnGmlZvi3Rz6GFyAZVXRlb6xOoVlta2os55iQaOyAjqyqPCVIGYknKQRrYW4dDOuVHWEKiddYybXBDSZydqbPOJqtUZchbLoDmGigcbDpJlJitNKVTDpWFP6jMcpAHD7J/oCTcw9YRPlBu0l6AlTbINHEVjVq1WRSalMUwuYgIgvaxynNqSeXGE2daVJMoLUSpp1CTcAfZK21FtOI4DpJNRWPARlqZHIwSQNsYxW3shd6eGRKzCxq5sx5a5covwHPkOMiYPbYWklKrhlrCnbIWNiAOF7qfL4CHW2ezG85G3tsYPAC1dzmsCEXVtbcenG+sdxxRW4ieWUtjrU+0D76pWakGLpuwoYqEQagXynNqSeXEyLgcSadCpQFO+8t4s1rWt9mxvw6iV3ZfbjAV3CXenfgWsVv6iXSnRBAKkEEAgjgQeBEFLG9l7fYmUMsd5e/wByiYvZAqVa9APlNZFNUFSSFChCUN7XKWGvA668JK2RhKSYepiHqg0zVc3CMpBZgMuUkk8RrHdoUq/0+oMOFz7lSc/DJZb+/Ccf6SowVGkzWVsQ7Of+GuUH/Nf2mOfWSjJ141fnb87ndw/pGPJGG7d6LS5pxbl49vhO5tKlRo06dU1DkqAFDlJuCL69NJAevR3Yq7wFS2TQG4axNiOI0BMY+mF8LhQBnaliSoX7x8LIvocwEVtXAVqa7+rSCNVxVMrRFrDKtQ204XLW+Mh/qGbmNVS8exZH9E6VNRyNp3JfMt6bXFXxvfA/ReiwQirfO4QaHRzwDdL9fWMbTx2Gw7ZatUraoKRbKSoc34tyGh+BnRq7FqtRxmKrUxRY5KtOmLeFqV2J04XFx7mcDtRsgVcHgQ7eLF7QXOw4/pcyA+w19SZZHrc7dOvX/H9mTqP07pIY3PG291HlPek+UqaSte73J+0sRQwr1Uq1CDSSnUeysbJUZUUi3HVhJ+we2ezlo1axxDZKRphgUYEtUzZFQfaJyN6AXmd7VxtWqmOWuCK1HC4TD1b63qUMVSTNfncAH3ls2hsPGYjBUkxuIwlBi+EbAlRlD1QjDd1fDxIZbHXUGWS6icjmxwxiXTBdvdn1MPVxC1bJRKiorqVqKW0XwcTc6C3Qx/s72mwO1cy0rlksWR1KMFbgw6j08uszXatYYsYvA7RXDYPGq1BvpI0SswHgSqVvxUggjrwFrHudme0D0MbUobQw1EYpaK2xFELepRGXwsR7Hl9XgIkW29hmkkaS+yqYHhRQfMXgnCqdtVX6tO/rBNCxZfQq7kPU7dOqOaW9It8QOYnDG1anl8Ip9osRYgesO0xe4jpVcV0jSYnrrOQXJ5xVNyI/bQms7tLELy0j5rqOYnA3rHnFKOpivGMsh2/pKngYVRieE5SvbgPeGarHiTI0E6yXisSaSPVYXWmjuR1CKWt72tPMnaPaFTE13q1WzMzEk+Z6DlPSrUd8j0nJyOlRWsbHIVINj7zH+1fZRS9JadLdOzshA1GUAHP5zLlyxjNRZv6bFKeNtGf4SixNwDN07p6tWrhHViSKb2UngFIvlvzN7zh4LsyuHRVysQeLBSRfzIFhNE7HbKOGpOlrBmRwLHjlIOvDpKIdQpZEkjTn6fRibbEpskDENiMxzsm7IuMuXTyvfSRdm9k6NF0e7vkz5VcqV8V7kjL5/ISyvRtCalcXmpxg96MK6jMk0pOqr9kq/DaK+3ZPDmpvA1QfpVrZAVyCopvoMvDynR2xsmniggdmG7qLUGUgeIX0NwdNZM9hAKd+IkduCVUS+qzNqTk7XHsR9p0lq03pMDZ1ZSRxswsbGcSv2co1Uw1NjUthqqVqZBW5dCSA+mo15WlkSkB/pEtTHpHqN8FWuenTe13XuVvavYXCYqpiarmorYlKS1cjKB+jZGDKCpsSaa395Cw/dbgEo1aF6zLUNJrs65qb084VqZC6GzsDe4ltGItoBCrVzboZHbRGsq+H7ttnpQrUnNWqa2UvVqPeqChupUgACx8ted5w8N2Kw+DdmpVXqORYvVOZsumgIAHIfCW6qGa+pMY+iEy/HjjB2UzySkqKzVwR5QSxVMERBNayGfSx9cOekX9HPSWRag+7F5VP2BMXefoae0isbiKFKWE4ZT9mF9AHSHeQdo4QowVLIMzMFA4liAPiZ3voSjU6dZgva3bH0rEM9zk03YPAU+IsORta8rn1FcFuPp9XJoFXtfglJG9LEX+qjEEjkCQBr14TjbZ7w0RT9HpEtqA1TQDzyg6+l5ntOoBcnhpIreK58zM7zzZpXT40a5g8dV3eHxmYulfD0qVQ8qeJQkuCBoAzE8OagdIkYgNVs/qD5HjaV/u77TLh1fD19aLBmsRezcwBzv06yDT7SKfpBeiLhWahq3hYnRWN9dCP3TOdOMnJnUxZVGFFyq4umWVKO9FUsi3tU3ZN9L5Ab+tiBNEw4KqoNgcq5rfesL689ec8+1+2tZqW7FNVawG8BNxrc5B9km1r3OhM6nZnvMxGHYJiCa1L9bWov/K/EjyN5p6eGjdozdXPupKLNwzA84oCc7Ye06WMopXoklHBtcWIIJBB87gzpKJt+hzeORDIByjT35STEkQTII2TqYRpXkjJEskayKIzUV6SMyL5yc1ONGgIyYrREGQaCEbAaCPNhhAMIOYj2haZBbEDpBH3oIOUKNaFpnZWOoY2ix0JMzNCFhxBmERkihTi7E7nF7a4zdYDEuNDuaig/rOMgPxaedKz3+A+AFpuPfBiRS2a6k61alGmo62YVG/hptMEZjwlM+TRi4HK2ir53Y/lE0zaKxbakdAB8P8AvCpj8D+ERcFvkIvbhGHcsbE/79Y84iKa85CJY2RaIJjtSMtHTEN17kqpfAMv3K9RR7qjfzTQwkznuIS2Bqn72JqH4U6Q/KaVLo8GafzMLJGnUR4xt1koQjOYjfRdRYw4liFYTVPWJOIiWEbIj0hLYpsQY1UxTRWWJZYyohtjFSsx4gQQMhMEfYTcsSiOARKR5TMTZsSEARV4qEZBJi3fftXeYijhhwpIXb/Eq2sPZVH78zbDp41B4Xv7DX8p3O320t/tDEPaw3hUC9zamAgPvlvbzleWrr7H5i0zu3ZojSoN2vc9bmHS/L/tECLAspPt87yfBImq8SrWEbYwMeAgkDDvGzFGEIyIN67lkts1T1rYg/Bgv8sv4EondEbbMo/81c//AGtLyry9L4UZJv4mLtAYYaMVXtAixNWRnED1I2zSxIVsJomAmFmjiirQisIExcCBGSFHAIIWFHWSOqI2scEyWa6FSJtbEijRq1fuU6j/ALqk/lJUq/eXit1szEnmyCmP/kZVPyJkN7Epbnm2vULMWJJJJJJ4kk3JPnELFOIgDnERaOE2gDXW361/lCaHTGkHwCEMto3zj9QxkwiSw6YuRCh0+I9R+MIrcRkQaH2P7y6WCwiUGpMShPiB1sxJNhwIF7/KS6PfTWLZThqYGoDEnTQWZgBrqDp0Myncm3CJyx3Ber/kTV7L+D1H2a7WYfHAbtxmIBy8z96w6A/iJ1688vdkMZVo4qkabFbugbXKLEgXY9Be9udp6iC6C/QfhGg2nTK8sY1qWxHKxsrH3EYcGXIzsbIEItCcRsmOKOZ4YqiRWeNmqI2kWyYcT5QTmvXEEnQRqLesWI2piwZzzeKlA77cSE2cF5vXpAfshmP4S+5plHf5iv0eFp9Wrv8AuhFH+YyHwNHkxtmil4CMmOoZFDiiYGPKEIgOZDBAYwBY5TTMZ1sHswtyiuSQ6i3wcpaJjq4Yy04fYw0vHW2WBylbzIuWBnR2J2cV6Co1mDUqVTNYeE1VzZfUeuuh5xG2+xVIULJZWUBs1vESM2bMehuug+7NZ2fsILgsPkVTVSjR1tbOoUXB+OhPSV3tRkwqq2IqIrVCVVBcnLY3J8uXvKJPLGVrjktg8co0+eDHeyNFaeOoio1lLgXyqwvfS+YgAfrcp6a0toQR1Fj+E8xY5kLs4a3iYJbkg4H3MsnZbtRisEm9p/pKb38DahipIJJ4jW/npNfdp2zHLFqVI3Sosj1BOH2e7ZUsYwp2yORwJ+sbZgF010vp+rznfurC4IPLQ316TVjyKW6Mc8bi6ZCqSNUaTayyFVmiLKWiLUaMMY/UMYZpcipjRggZoI4hdA8VvJEDRYac3SdGx41JmXfPQpsKLtcuA6gcrEg3t10mje0oPePRqNXw2SiajXXdplzK9RSzZWBIuvAnUaXiZFsWYvm3Mbq4QBXbW43ZA5WOa9/4fnIqmal2q7LVdoVGxNE0qd6GWtTLABMVSsGp6eQFmAI0vwIMylGi0PaH4lRE5rx2iIrBHU2VhcxEuuzcDflK/sGlNB2Lh72mTI3KVG3GtMbEYPZg5jkbepFrybR2GKjBApDMbAg8+pBlq2ds0WvaSzhxTZXHI39uf4yJYBVn3OpgqG6pJT+6iL+6APymLd51GpWxbk3ZRlSnbgLaW+Jb4zZlxqPfKwNuNuI9RMo7Q4nOKrK1wKgYednuT/GPhDqsrhoUfX+iejx6nLUUvbey7YVPDr4bW6X0v6/mYx2NqGrSr4csPDldAbXGYsKlvIWU+Vz1lzwuFWvh6iDiOH7JzL8rTO8LXahjnVLDOz0tbm2dgRoNTrbTnKcE3khKPlbl2eKhJS/YsOyRu8TS8RC7ykucaFQGWzj0IB9pYcFt84bb1bC7wtSrCktvsivulYMOVySQbcc8pVfAWbMXepbW1QMut+SaD8ZE7ck4fGUatMhSKWGdQBbKyohU28xl+E1YNpmTMrjR6EqtINWFsraC4qhTrp9Woit6E8R7G49ouoJ2I0clpkR4yw8pJZY2UlqZW0RmWCPFIUaxdJ3g0qveViimFQKSC1ZLEaEZVZrj3AlrAlB71K2uHp/4rn+ED+ac/NtBm3H8yKbje2e0Ben9MqFbAZWysCLc8wN/eV/FY+pUADFCL3y7ukqm3VVUBvcGFimu7ep+UYMyovYnFDfWNTxZQFXkFUcFUCwAHQSJXoBLW/EmTVjOOHD1jJ7gRllh7F7E+nYjc3IAp1XJ6ECyfxsnzleE0nuVUGriOObd07dMuY3+ZHwlkUnJJhN1FtHI2K5RirCzAkEdGBsR8ZoOxMQBaZ52nvh9oYlOH6UsPSoBU/nnb2NtThrMWWLjK0bcUlONGz7IxAKm3lDx5JBtr5St9j8dnYrf7P4ES0Ms04mskTLkXbmUba9bKDY2vobdOhlSxuIvTqAHgFP7JIDfMp8JqO1th064N/CT9of6c5Vu0HZelRwmIamrNUFGoQeJOUZrBRxuVEx/+PI5O6+ptXW44xS8lK7IbUK12pnUVBpc/aHTztKR2mP96r2Nv0tQA9LGwlg7OY3DhS7C9ZSctrkgg6EKOA4C9uZlc7SYgPiqzDg1Rm+OsfDjrK3Xgqz5FKC3L82ONZVdEYK6qxLMCLEcZS+3tQtigDbSjQtYg+DJdb24XUqbdLTubG2ifoIfOAKYZNbaEMQnnzWU3aGIfE13f7RJsBrZUAVR7KoHtH6aFTftsVZ53Be5q3cntrPQqYRjrSbOn+FUJzAej3P7YmjOLzGe6nZmJTGpiFostHd1Eqs2im40CHn4gnprNnz3nUimkc+XIyacQUj5UxJpGOmLRHYQR00TBG1IjSdgU5lfebVvjAv3KNMe5LsfkwmwBJh/byvnx2Jb7pyj9hVX8QZgzyuNGnGtykvqSfMxJgglRYGojePGg9fyMdSDGDwX8xIvclHOmm9yVhiKq82oO/7K1Kar8y/wmZgHjyva/K80zuUOfaVUL9RcGyj2q0PzLmWR5Il8rIHfBht1tHNyqUaL+4LIf8gldwGMK85oXf7gMv0SuP8Aj0j/AAOv4P8AGZRTqWkZFbGxSpI2fuwxBerfyYfAXmmMDMs7oU8dNvvLVPuAP9ZrRWJ02yf1J6qVyT9iI1MxvcycTIztckdLX95rTMbPNHb3ZP8AZ206tMOy0qp3qlDZtzVYnKOmVgw9Flax9t4VRHBBIKsDmFtLnnfj8J6j21sOnWWq26U1XoVKIqWGfIwNlDHgLmZD2/qbnH1bohB3Luh8JzGmhbK499esWUaVlkZXsZzTr11plLuKRIZlN8hcWsSDpfQfCdLs7hFasN4PAQSwB1yjU8efCdjtLXwtSjkpvlIIqKNXuQpGRj9k+L0089OJsevu6iG4AzLmJ4ZCbVCSf1SZVF6ldUW5Eouk7PR1KmtgFUAWFgOAHK0dURWycM26UObsoyMerJpm9wAfeS9xblNinaMrjTI4B6Q8hkoJD3cRyGSIJpwSYacENQUO4TalCqSKdam5UXbKwNh1PlMJ7wK9sZiytipdjpw4AmxHnO/sfHCkKoCA76k9HjbLcDWx+t6acZV+0GyyVY0zmJU3UX+Vhx8pTPHY0MhVd9pnsbA5eP2tNOHG1zC+mDoY7/4fxNgRTvcX+sgIv1DEEGH/AGDiR/6B5cCh4+jSNHsNr9xCV82i3v7coVTFhlK68tdOsMbGxIOlF7+Wp+RkVsO6Eh1KkcjofhIcUhou2dHYppszUKpypVygPa+7rC+7e3TUqfJz0mj9x1AYfGYsVWVWC06K3IGZzUJst+N8oPwmSgy57JrXpLUNw7NdjrclAqhvXSLFXKhpuotmg9/uIU4ajSynMKoqg6Wy5XQjre7D4TDgZbO0WIepRYszNbJqxJP1h1lQzRpqmLjdo3DueIK0j0Sp8fqn8Jee0vaengSgem7lwxXLYDw2GpJ049DMk7ttuHC0C6gMyrXIU3sfEDrbyJkjtP2lfHsjNTVMgYDKSb5iDrf0i4Y8/UM8uPoaVsjtnh64cuDR3YUsXK5fE2UAMOd/KObA2smJxGK3bBkXcZSOBGUg/MGYwcQVBCki9r6nWxuL+hlx7pMX/eKyE/WpZv3XX/qMuaopTs1TdzF+/Chu8XQqKrXeiwOl0Yox58iA2p6EdJfNqd4eEo51XPVdSy2UWUsLj650tccReZP2z2xitoE1K7qqqoK0FHhTNY5Q3Fza2Yk2JHAW0rlKtmWqFptFJxgaqFYaBiwIHlxMQoQWCZvR+Z9gNPKSQwRhqQGsrFrHjz04AHW0Dq4bUg21HAC8NQtHpPsLjxisJTqhrnJSVx0qqgDX+XwnZqpMx7iNpMVq4c6hAajeTuwAAPPQE/Gas8mMgaIqJHN3FFwIW86D46QciUhJpwoZvzPw0gi6iaMETEDr/tCetY/WB46jhKmu1xF/2wOFpo1op0FmWvc6mL+k/rW14X0t7e8q1PbJFhfSBtqjzjd1BoLYMSoN7n+r+cpm162avUPmPkAPykpdqicTE1szserMfnKc09SLcMKbYYUkMR9m1/Qm1/S9h7iW7D1wMPS66n1BPpKjhK4RwW+obq4/UbRvccR5gTurislMUX0NMsvDiL3VgehBvKoP4kW5F8LF7Tr5qTeg/EStl518bWXIwUnUc5wi0fI7YuJbFk7N4/KcnVa/8VP/AFUScK+sq+Cq5XU+YnaOJXzk4mlZGVXR01xJ9fXWTdi7bqYVzUpZcxR0OYXGVuOnXScNMYtra/CAYxf6Eu1RKUmdBao6dIVV84y/jrw9umk5/wBMXXj8IS44A38wZEtLQ62OXi6dr+Xwk6pWIpo9gSQA19dV4H4WjW0bXzA6MP6EfXFrUwYUooajUyllFi9N18Oe3FgUIv0ImTwP5LL3V7fqYevWpU9XrUahTNbLvaKO6aaE3GYWX8tOliO8vG1CjDdrlLGwz5WDCwDqW1tx5TP9i7QOHr0q6n/y3Vj6cCvuCRCxeJKVHVQMoZsp11S/hPutj7yyFeSGaFjO8vGOyMopJkJawDWYlSpD+LUak+tp18V3msUsqAlhZhbKFuOtzeZAMcb6gR5cfblHcYkWzQtkdvcXR0eoKqBcoQhVtbgQwW+nDWCZzU2ix6CCRpiTZxRVMUtWNQRAJG/h76RocmwJS1o27a/OMxd5DGi6FZp2a+ND06TX8QXI37Nsp+B+U4d4oNFS3Gb2Og9cEEeRkGJzQmMlkQdD1J9QfMTpGp5zn4TDhwTnC2116dY0tYwiEzqbzzhGrOaK0G9jCHQNaNmoJCLxGvWAEitiTw104R3CYjwVVPMUz7hwD8mMhOLDXjy9Iqg1g3mtve4P8sADaueHKO16hsrX4i3uulj7WkQxbnwjTm35SADNWFvTG4IALLmCIggAIIIIACCCCAAh3hQQAEO8KCABwXhQQAcp1itwOB0IiDCggAcO8TBABV4efoAIiCABkwAwoIACKZtImCAAggggAIIIIACCCCAAggggAIIIIACCCCAAggggAIIIIACCCCAAggggAIIIIACCCCAAggggAIIIIAf/2Q==",
    description: "A struggling salesman tries to build a better life for his son.",
    cast: "Will Smith, Jaden Smith",
    trailer: "https://www.youtube.com/watch?v=DMOBlEcRuw8"
  },
  {
    title: "Avengers: Endgame",
    genre: "action",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description: "The Avengers assemble once more to reverse Thanos' actions.",
    cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
  },
  {
    title: "Inception",
    genre: "sci-fi",
    image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    description: "A skilled thief leads a team into people's dreams to plant ideas.",
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Tom Hardy",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
  },
  {
    title: "Interstellar",
    genre: "sci-fi",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "Astronauts travel through a wormhole to save humanity.",
    cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },
  {
    title: "The Dark Knight",
    genre: "action",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman faces the Joker in a battle for Gotham's soul.",
    cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    title: "The Lion King",
    genre: "animation",
    image: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    description: "A lion prince flees his kingdom after his father's death.",
    cast: "Donald Glover, Beyoncé, James Earl Jones",
    trailer: "https://www.youtube.com/watch?v=7TavVZMewpY"
  },
  {
    title: "Frozen II",
    genre: "animation",
    image: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
    description: "Elsa and Anna uncover the source of Elsa's powers.",
    cast: "Idina Menzel, Kristen Bell, Josh Gad",
    trailer: "https://www.youtube.com/watch?v=bwzLiQZDw2I"
  },
  {
    title: "Black Panther",
    genre: "action",
    image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    description: "T'Challa returns home to Wakanda to become king.",
    cast: "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o",
    trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU"
  },
  {
    title: "Spider-Man: No Way Home",
    genre: "action",
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    description: "Peter seeks help from Doctor Strange after identity reveal.",
    cast: "Tom Holland, Zendaya, Benedict Cumberbatch",
    trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA"
  }
];

let favorites = [];

const container = document.getElementById("movie-container");
const searchInput = document.getElementById("search");
const genreFilter = document.getElementById("genreFilter");
const themeBtn = document.getElementById("toggleTheme");

function displayMovies(movieList) {
  container.innerHTML = "";
  movieList.forEach((movie, index) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}" loading="lazy">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <span class="favorite" onclick="toggleFavorite(${index}, event)">
          ${favorites.includes(index) ? "♥" : "♡"}
        </span>
      </div>
    `;
    card.addEventListener("click", () => openModal(movie));
    container.appendChild(card);
  });
}

function filterAndSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedGenre = genreFilter.value;
  const filtered = movies.filter(movie =>
    (movie.title.toLowerCase().includes(searchTerm)) &&
    (selectedGenre === "all" || movie.genre === selectedGenre)
  );
  displayMovies(filtered);
}

function toggleFavorite(index, e) {
  e.stopPropagation();
  if (favorites.includes(index)) {
    favorites = favorites.filter(i => i !== index);
  } else {
    favorites.push(index);
  }
  filterAndSearch();
  renderFavorites();
}

function openModal(movie) {
  document.getElementById("modalTitle").textContent = movie.title;
  document.getElementById("modalDesc").textContent = movie.description;
  document.getElementById("modalCast").textContent = movie.cast;
  document.getElementById("modalTrailer").href = movie.trailer;
  document.getElementById("modal").classList.remove("hidden");
}

document.getElementById("closeModal").onclick = () => {
  document.getElementById("modal").classList.add("hidden");
};

searchInput.addEventListener("input", filterAndSearch);
genreFilter.addEventListener("change", filterAndSearch);
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "🌞 Light" : "🌙 Dark";
});

function renderFavorites() {
  const favContainer = document.getElementById("favorites-container");
  favContainer.innerHTML = "";
  favorites.forEach(index => {
    const movie = movies[index];
    const favCard = document.createElement("div");
    favCard.classList.add("movie-card");
    favCard.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}" loading="lazy">
      <div class="movie-info">
        <h3>${movie.title}</h3>
      </div>
    `;
    favCard.addEventListener("click", () => openModal(movie));
    favContainer.appendChild(favCard);
  });
}

// Initial load
displayMovies(movies);
