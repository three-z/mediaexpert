({
	block: 'template-page',
	title: 'Рекламные ролики',
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
						},
						{
							url: '#',
							content: 'Рекламные ролик'
						}
					]
				},
				{
					block: 'template-page-title',
					title : 'Оформить заявку',
					underline: true
				},
				{
					block: 'video',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									block: 'template-request-form',
								},
								{
									block: 'video-list',
									content: [
										{
											block: 'video-list-item',
											content: [
												{
													tag: 'img',
													attrs: { src: 'img/tmp/video/1.jpg' },
												}
											]
										},
										{
											block: 'video-list-item',
											content: [
												{
													tag: 'img',
													attrs: { src: 'img/tmp/video/2.jpg' },
												}
											]
										},
										{
											block: 'video-list-item',
											content: [
												{
													tag: 'img',
													attrs: { src: 'img/tmp/video/1.jpg' },
												}
											]
										},
										{
											block: 'video-list-item',
											content: [
												{
													tag: 'img',
													attrs: { src: 'img/tmp/video/2.jpg' },
												}
											]
										},
										{
											block: 'video-list-item',
											content: [
												{
													tag: 'img',
													attrs: { src: 'img/tmp/video/1.jpg' },
												}
											]
										},
										{
											block: 'video-list-item',
											content: [
												{
													tag: 'img',
													attrs: { src: 'img/tmp/video/2.jpg' },
												}
											]
										}
									]
								},
								{
									elem: 'back',
									content: [
										{
											block: 'back-button',
											tag: 'a',
											attrs: { href: '#' },
											content: '← назад'
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
})