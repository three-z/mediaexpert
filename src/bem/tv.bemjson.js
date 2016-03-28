({
	block: 'template-page',
	title: 'Реклама на телевидении',
	content: [
		{
			block: 'content',
			content: [
				{
					block : 'template-breadcrumbs',
					links: [
						{
							url: '#',
							content: 'Главная'
						},
						{
							url: '#',
							content: 'Реклама на телевидении'
						}
					]
				},
				{
					block: 'template-page-title',
					title : 'Оформить заявку',
					underline: true
				},
				{
					block: 'tv',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									block: 'template-request-form',
								},
								{
									block: 'tv-list',
									content: [
										{
											url: '#',
											thumb: 'img/tmp/on-tv/1.png',
											title: 'реклама на телевидении',
											subtitle: 'ПЕРВЫЙ',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-tv/2.png',
											title: 'реклама на телевидении',
											subtitle: 'РОССИЯ',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-tv/1.png',
											title: 'реклама на телевидении',
											subtitle: 'ПЕРВЫЙ',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-tv/2.png',
											title: 'реклама на телевидении',
											subtitle: 'РОССИЯ',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-tv/1.png',
											title: 'реклама на телевидении',
											subtitle: 'ПЕРВЫЙ',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-tv/2.png',
											title: 'реклама на телевидении',
											subtitle: 'РОССИЯ',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-tv/1.png',
											title: 'реклама на телевидении',
											subtitle: 'ПЕРВЫЙ',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-tv/2.png',
											title: 'реклама на телевидении',
											subtitle: 'РОССИЯ',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-tv/1.png',
											title: 'реклама на телевидении',
											subtitle: 'ПЕРВЫЙ',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-tv/2.png',
											title: 'реклама на телевидении',
											subtitle: 'РОССИЯ',
										}
									].map(function(item) {
										return {
											block: 'tv-list-item',
											content: [
												{
													tag: 'a',
													attrs: { href: item.url },
													content : [
														{
															elem: 'thumb',
															content: [
																{
																	tag: 'img',
																	attrs: { src: item.thumb },
																}
															]
														},
														{
															elem: 'title',
															content: item.title
														},
														{
															elem: 'sub-title',
															content: item.subtitle
														}
													]
												}
											]
										};
									})
								}
							]
						}
					]
				},
				{
					block : 'template-last-reclam'
				},
				{
					block : 'template-last-news'
				},
				{
					block : 'template-clients'
				}
			]
		}
	]
})