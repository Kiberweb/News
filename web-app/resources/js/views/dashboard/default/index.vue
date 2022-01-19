<template>
    <div>
        <div class="buttons-group">
            <button @click="hideShow('news', clearNews)" type="button" class="btn btn-primary">
                <span v-if="!forms.news">Добавить Новость</span>
                <span v-else>Закрыть форму</span>
            </button>
            <button @click="hideShow('hashtag', clearHashtag)" type="button" class="btn btn-primary">
                <span v-if="!forms.hashtag">Добавить Хештег</span>
                <span v-else>Закрыть форму</span>
            </button>
            <button @click="hideShow('allNews')" type="button" class="btn btn-primary">
                <span v-if="!forms.allNews">Показать все Новости</span>
                <span v-else>Спрятать все Новости</span>
            </button>
            <button @click="hideShow('allHashtags')" type="button" class="btn btn-primary">
                <span v-if="!forms.allHashtags">Все Хештеги</span>
                <span v-else>Спрятать все Хештеги</span>
            </button>
        </div>
        <!-- ALL NEWS -->
        <div v-if="forms.allNews">
            <br/>
            <div v-if="lists.length === 0">
                <h5 class="center">Новостей нету</h5>
            </div>
            <div v-else>
                <card v-for="post in lists" :key="post.id" :post="post">
                    <template v-slot:buttons>
                        <div class="text-end">
                            <button @click="editPost(post)" type="button" class="btn btn-success">Редактировать</button>&nbsp;&nbsp;
                            <button @click="deletePost(post.id)" type="button" class="btn btn-danger">Удалить</button>
                        </div>
                    </template>
                </card>
            </div>
        </div>
        <!-- ALL HASHTAGS -->
        <div v-if="forms.allHashtags">
            <br/>
            <div v-if="hashtags.length === 0">
                <h5 class="center">Хештегов нету</h5>
            </div>
            <div v-else>
                <card v-for="hashtag in hashtags" :key="hashtag.id" :post="hashtag" :hide-link="false" path="post/hashtag/">
                    <template v-slot:buttons>
                        <div class="text-end">
                            <button @click="editHashtag(hashtag)" type="button" class="btn btn-success">Редактировать</button>&nbsp;&nbsp;
                            <button @click="deleteHashtag(hashtag.id)" type="button" class="btn btn-danger">Удалить</button>
                        </div>
                    </template>
                </card>
            </div>
        </div>
        <!-- CREATE NEWS -->
        <div v-if="forms.news">
            <!-- Response status -->
            <alert v-if="response.news.success" type="success">
                Хештег был успешно добавлен!
            </alert>
            <alert v-if="response.news.error" type="danger">
                Ошибка добавления хештега
            </alert>
            <!-- Title -->
            <div class="mb-3">
                <label for="title" class="form-label">Названия новости:</label>
                <input v-model="news.title" @input="createNewsLink" @blur="uniqueLink('news')" type="text" class="form-control" id="title" placeholder="Названия новости">
            </div>
            <!-- Lang -->
            <div class="wrapper-box box-padding">
                <div class="element-separate">Язык:</div>
                <div v-for="item in langs" :key="item.lang" class="form-check element-separate">
                    <input v-model="selectedLang" :value="item.lang" class="form-check-input cursor-pointer" type="radio" name="lang" :id="'lang-' + item.lang">
                    <label class="form-check-label cursor-pointer" :for="'lang-' + item.lang">
                        {{ item.label }}
                    </label>
                </div>
            </div>
            <!-- Text -->
            <div class="mb-3">
                <label for="text" class="form-label">Текст новости:</label>
                <tinymce v-model="news.text" :height="300" />
            </div>
            <!-- Link -->
            <div class="mb-3">
                <label for="link" class="form-label">Уникальная ссылка:</label>
                <input v-model="news.link" disabled type="text" class="form-control" id="link" placeholder="Уникальная ссылка на новость">
                <span v-if="this.linkNews"><b style="color: red;">Эта ссылка используется замените названия для новости.</b></span>
            </div>
            <!-- Hashtag -->
            <div class="mb-3 box-padding">
                <label for="hashtag" class="form-label">Выберите хештег:</label>
                <!-- Lists hashtags -->
                <div ref="listHashtags" class="wrapper-box">
                    <div v-for="item in hashtags" :key="item.id" class="form-check tag">
                        <input v-model="selectedHashtags" :value="item.id" :id="item.link" :disabled="disabledHashtag(item.id)" class="form-check-input" type="checkbox">
                        <label class="form-check-label cursor-pointer" :for="item.link">
                            #{{ item.name }}
                        </label>
                    </div>
                </div>
            </div>
            <div class="center">
                <button @click="saveNews" type="button" class="btn btn-success">Сохранить</button>&nbsp;&nbsp;
                <button @click="hideShow('news')" type="button" class="btn btn-secondary">Закрыть</button>
            </div>
        </div>
        <!-- CREATE HASHTAG -->
        <div v-if="forms.hashtag">
            <!-- Response status -->
            <alert v-if="response.hashtag.success" type="success">
                Хештег был успешно добавлен!
            </alert>
            <alert v-if="response.hashtag.error" type="danger">
                Ошибка добавления хештега
            </alert>
            <div class="mb-3">
                <label for="hashtag-name" class="form-label">Названия хештега:</label>
                <input v-model="hashteg.name" ref="hname" type="text" class="form-control" id="hashtag-name" placeholder="Названия хештега">
                <div class="invalid-feedback">
                    Please enter a message in the textarea.
                </div>
            </div>
            <div class="mb-3">
                <label for="hashtag-link" class="form-label">Ссылка хештега:</label>
                <input v-model="hashteg.link" @blur="uniqueLink('hashtag')" ref="hlink" type="text" class="form-control" id="hashtag-link" placeholder="Уникальная ссылка хештега">
                <span v-if="this.linkHashtag"><b style="color: red;">Эта ссылка используется замените названия для хештега.</b></span>
            </div>
            <div class="center">
                <button @click="saveHashtag" type="button" class="btn btn-success">Сохранить</button>&nbsp;&nbsp;
                <button @click="hideShow('hashtag', clearHashtag)" type="button" class="btn btn-secondary">Закрыть</button>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../../../components/Card';
import Alert from '../../../components/Alert';
import Tinymce from '../../../components/Tinymce';
import Resource from '../../../api/resource';

const News = new Resource('news');
const Hashtags = new Resource('hashtag');
const LinkNews = new Resource('news-link/');
const LinkHashtags = new Resource('hashtag-link/');

export default {
    name: 'index',
    components: {
        Tinymce,
        Alert,
        Card,
    },
    data() {
        return {
            langs: [
                {
                    label: 'Укр.',
                    lang: 'ua',
                },
                {
                    label: 'Рус.',
                    lang: 'ru',
                },
            ],
            selectedLang: 'ru',
            hashtags: [],
            lists: [],
            selectedHashtags: [],
            forms: {
                active: false,
                news: false,
                hashtag: false,
                allNews: false,
                allHashtags: false,
            },
            query: {
                limit: 20,
                page: 1,
            },
            // forms
            news: {
                id: undefined,
                title: '',
                text: '',
                link: '',
                id_hashtag: [],
                lang: '',
            },
            hashteg: {
                id: undefined,
                name: '',
                link: '',
            },
            response: {
                news: {
                    success: false,
                    error: false,
                },
                hashtag: {
                    success: false,
                    error: false,
                },
            },
            linkNews: false,
            linkHashtag: false,
        };
    },
    created() {
        this.getHashtags();
        this.getList();
    },
    methods: {
        getList() {
            News
                .list(this.query)
                .then(response => {
                    if (response.status === 200) {
                        this.lists = response.data.data.data;
                    }
                })
                .catch(error => {});
        },
        getHashtags() {
            Hashtags.list(this.query).then(response => {
                if (response.status === 200) {
                    this.hashtags = response.data.data.data;
                }
            }).catch(error=>{
                console.log(error);
            });
        },
        deletePost(id){
            News
                .destroy(id)
                .then(response => {
                    if(response === 200) {
                        this.getList();
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        saveNews() {
            if (this.news.id === undefined) {
                this.news.lang = this.selectedLang;
                this.news.id_hashtag = this.selectedHashtags;
                News
                    .store(this.news)
                    .then(response => {
                        if (response.status === 200) {
                            this.showStatus('news','success', 2000);
                            this.clearNews();
                            this.getList();
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        this.showStatus('news', 'error', 2000);
                    });
            } else {
                this.news.lang = this.selectedLang;
                this.news.id_hashtag = this.selectedHashtags;
                News
                    .update(this.news.id, this.news)
                    .then(response => {
                        if (response.status === 200) {
                            this.showStatus('news','success', 2000);
                            this.clearNews();
                            this.getList();
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        this.showStatus('news', 'error', 2000);
                    });
            }
            this.getList();
        },
        saveHashtag() {
            if (this.hashteg.id === undefined) {
                Hashtags
                    .store(this.hashteg)
                    .then(response => {
                        if (response.status === 200) {
                            this.showStatus('hashtag','success', 2000);
                            this.clearHashtag();
                            this.getHashtags();
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        this.showStatus('hashtag', 'error', 2000);
                    });
            } else {
                Hashtags
                    .update(this.hashteg.id, this.hashteg)
                    .then(response => {
                        if (response.status === 200) {
                            this.showStatus('hashtag','success', 2000);
                            this.clearHashtag();
                            this.getHashtags();
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        this.showStatus('hashtag', 'error', 2000);
                    });
            }
        },
        hideShow(forms, func = () => {}) {
            if (!this.forms.active) {
                this.forms.active = true;
                this.forms[forms] = !this.forms[forms];
                func();
            } else if (this.forms[forms]) {
                this.forms.active = false;
                this.forms[forms] = !this.forms[forms];
                func();
            }
        },
        clearHashtag() {
            this.hashteg = {
                id: undefined,
                name: '',
                link: '',
            };
        },
        clearNews() {
            this.news = {
                id: undefined,
                title: '',
                text: '',
                link: '',
                id_hashtag: [],
                lang: '',
            };
        },
        disabledHashtag(value) {
            const MIN = 0,
                  MAX = 3,
                  IS_CHECKED = this.selectedHashtags.includes(value),
                  LENGTH = this.selectedHashtags.length;

            return (LENGTH >= MAX && !IS_CHECKED) || (LENGTH <= MIN && IS_CHECKED);
        },
        showStatus(name, type = success, time = 1700) {
            this.response[name][type] = true;
            setTimeout(() => {
                this.response[name][type] = false;
            }, time);
        },
        editPost(post) {
            this.news = post;
            this.forms.allNews = false;
            this.forms.news = true;
        },
        editHashtag(hashtag) {
            this.hashteg = hashtag;
            this.forms.allHashtags = false;
            this.forms.hashtag = true;
        },
        deleteHashtag(id) {
            Hashtags
                .destroy(id)
                .then(response => {
                    if (response.status === 200) {
                        this.getHashtags();
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        createNewsLink() {
            this.news.link = this.news.title;
        },
        uniqueLink(type) {
            if (type === 'news') {
                LinkNews.list({
                    link: this.news.link,
                    lang: this.news.lang,
                })
                    .then(response => {
                        if (response.status === 200) {
                            this.news.link = response.data.data;
                            this.linkNews = false;
                        }
                    })
                    .catch(error => {
                        this.linkNews = true;
                        console.log(error);
                    });
            }

            if (type === 'hashtag') {
                LinkHashtags.list({
                    link: this.hashteg.link,
                    lang: 'ru',
                })
                    .then(response => {
                        if (response.status === 200) {
                            this.hashteg.link = response.data.data;
                            this.linkHashtag = false;
                        }
                    })
                    .catch(error => {
                        this.linkHashtag = true;
                        console.log(error);
                    });
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.buttons-group {
    padding: 7px 7px 15px;
    border: 1px solid #ced4da;
    border-width: 0 0 1px 0;
    margin-bottom: 15px;

    button {
        margin-right: 10px;
    }
}
.cursor-pointer {
    cursor: pointer;
}
.box-padding {
    padding-left: 7px;
}
.wrapper-box {
    display: flex;
    flex-wrap: wrap;
}
.tag, .element-separate {
    padding-right: 10px;
}
.center {
    text-align:center;
}
</style>
