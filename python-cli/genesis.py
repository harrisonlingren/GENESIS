import json
from pprint import pprint

def run():
    choices = []

    with open('story.json') as datafile:
        story = json.load(datafile)

    days = story['days']
    for day in days:
        header = day['head']
        print('\n\n' + header + '...\n---------------------------------------')

        questions = day['questions']
        for question in questions:
            try:
                print(question['phrase'])
                dayOptions = question['options']
            except TypeError:
                so = choice - 1
                choices.append(so)
                print(question[so]['phrase'])
                dayOptions = question[so]['options']

            print('Options:')
            print('  1: ' + dayOptions[0]['text'] + '\n  2: ' + dayOptions[1]['text'] + '\n  3: '+ dayOptions[2]['text'])
            choice = int(input('> '))
            choices.append(choice)
            print('[Info]  Updated choice array: ', choices)

        print('\n', day['foot'])

    print('\n\nCalculating result...')
    print(str(calcResult(choices)))

def calcResult(a):
    numOnes = 0
    numTwos = 0
    numThrees = 0
    total = len(a)

    for item in a:
        if item == 1:
            numOnes += 1
        elif item == 2:
            numTwos += 1
        elif item == 3:
            numThrees += 1
        else:
            print('[Err] No match found for: ' + str(item))

    percentages = [numOnes/total, numTwos/total, numThrees/total]

    result = 'Result:  ' + str(percentages[0]*100) + '% aggressive, ' + str(percentages[1]*100) + '% peaceful, ' + str(percentages[2]*100) + '% neutral.'
    return result

run()
