import './MyPolls.css'

import IPoll from '../../../../interfaces/IPoll';
import PollCard from '../../molecules/pollCard/PollCard';

import { Divider, Space } from 'antd';

const MyPolls = () => {
    let polls: IPoll[] = [
        {
            id: 'd01ddcd6-10bd-4215-99c4-90ed3a11e4a1',
            userId: 'e2afcaca-923c-4b90-b38a-519663edb6b4',
            name: 'Test Poll',
            description: 'A test poll to test functionality...',
            isOpen: true,
            isPublic: true,
            questions: [
                {
                    id: '332f06ed-acca-4fc0-aed5-60657ad78501',
                    pollId: 'd01ddcd6-10bd-4215-99c4-90ed3a11e4a1trings',
                    text: 'What is 2 + 2?',
                    options: [
                        {
                            questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                            text: '1',
                            value: 1
                        },
                        {
                            questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                            text: '2',
                            value: 3
                        },
                        {
                            questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                            text: '3',
                            value: 3
                        },
                        {
                            questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                            text: '4',
                            value: 4
                        }
                    ],
                    responses: [
                        {
                            questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                            selectedValue: 4
                        }
                    ]
                }
            ]
        },
        {
            id: 'd01ddcd6-10bd-4215-99c4-90ed3a11e4a5',
            userId: 'e2afcaca-923c-4b90-b38a-519663edb6b4',
            name: 'Test Poll',
            description: 'A test poll to test functionality...',
            isOpen: false,
            isPublic: true,
            questions: [
                {
                    id: '332f06ed-acca-4fc0-aed5-60657ad78501',
                    pollId: 'd01ddcd6-10bd-4215-99c4-90ed3a11e4a1trings',
                    text: 'What is 2 + 2?',
                    options: [
                        {
                            questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                            text: '1',
                            value: 1
                        },
                        {
                            questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                            text: '2',
                            value: 3
                        },
                        {
                            questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                            text: '3',
                            value: 3
                        },
                        {
                            questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                            text: '4',
                            value: 4
                        }
                    ],
                    responses: [
                        {
                            questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                            selectedValue: 4
                        }
                    ]
                }
            ]
        },
        {
          id: 'd01ddcd6-10bd-4215-99c4-90ed3a11e4a6',
          userId: 'e2afcaca-923c-4b90-b38a-519663edb6b4',
          name: 'Test Poll',
          description: 'A test poll to test functionality...',
          isOpen: true,
          isPublic: false,
          questions: [
              {
                  id: '332f06ed-acca-4fc0-aed5-60657ad78501',
                  pollId: 'd01ddcd6-10bd-4215-99c4-90ed3a11e4a1trings',
                  text: 'What is 2 + 2?',
                  options: [
                      {
                          questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                          text: '1',
                          value: 1
                      },
                      {
                          questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                          text: '2',
                          value: 3
                      },
                      {
                          questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                          text: '3',
                          value: 3
                      },
                      {
                          questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                          text: '4',
                          value: 4
                      }
                  ],
                  responses: [
                      {
                          questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                          selectedValue: 4
                      }
                  ]
              }
          ]
      },
      {
        id: 'd01ddcd6-10bd-4215-99c4-90ed3a11e4a7',
        userId: 'e2afcaca-923c-4b90-b38a-519663edb6b5',
        name: 'Test Poll',
        description: 'A test poll to test functionality...',
        isOpen: false,
        isPublic: false,
        questions: [
            {
                id: '332f06ed-acca-4fc0-aed5-60657ad78501',
                pollId: 'd01ddcd6-10bd-4215-99c4-90ed3a11e4a1trings',
                text: 'What is 2 + 2?',
                options: [
                    {
                        questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                        text: '1',
                        value: 1
                    },
                    {
                        questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                        text: '2',
                        value: 3
                    },
                    {
                        questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                        text: '3',
                        value: 3
                    },
                    {
                        questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                        text: '4',
                        value: 4
                    }
                ],
                responses: [
                    {
                        questionId: '332f06ed-acca-4fc0-aed5-60657ad78501',
                        selectedValue: 4
                    }
                ]
            }
        ]
    }
    ];

    return (
        <div className="my-polls-wrapper">
            <Divider>My Polls</Divider>
            <div className="poll-cards-wrapper">
                {polls.map((poll) => ( 
                    <PollCard key={poll.id} poll={poll}/>
                ))}
            </div>
        </div>
    )
}

export default MyPolls