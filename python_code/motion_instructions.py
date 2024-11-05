#!/usr/bin/env python3

import json
import google.generativeai as genai
import re
import ast
from langchain_core.prompts import PromptTemplate


def extract_array(output_string):
    array_str = re.search(r'\[\[.*\]\]', output_string).group(0)
    return array_str


def convert_to_array(array_str):
    return ast.literal_eval(array_str)

def write_to_json(array_data):
    # Write the array to a JSON file
    with open("../json_data/motion_data.json", "w") as json_file:
        json.dump(array_data, json_file, indent=4)
    print("Array written to motion_data.json")

def main():

    api_key = "AIzaSyB_Az0MiidwHv1D47mZfkQCPDJBG_xrbkI"
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel(model_name="gemini-1.5-flash")


    template = """
    Act as a drone motion coordinator. Convert the following motion instructions into a precise 2D array of coordinates.
    Each coordinate should be in format [x, y, z, angle].

    Instructions to process: {motion_instruction}

    Important rules:
    1. Default height (z) is 3 units unless specified
    2. Default movement distance is 1 unit unless specified
    3. Angles are in degrees (0° points east, 90° points north)
    4. All movements should be relative to the previous position
    5. Start position is always [0, 0, 3, 0]
    6. End position must be [0, 0, 0, 0]
    7. Round all numbers to 2 decimal places

    Examples of valid instructions:
    - "Move forward 2 units then turn right 90 degrees"
    - "Make a square with 3 unit sides"
    - "Go up to height 5, move forward 2 units, then land"

    Only respond with the resulting array in this exact format:
    Result: [[x1, y1, z1, angle1], [x2, y2, z2, angle2], ..., [0, 0, 0, 0]]
    """


    prompt_template = PromptTemplate(
        input_variables=["motion_instruction"],
        template=template
    )

    while True:

        motion_instruction = input("Enter your motion instructions (or type 'exit' to quit): ")


        if motion_instruction.lower() == 'exit':
            break


        final_prompt = prompt_template.format(motion_instruction=motion_instruction)


        response = model.generate_content(final_prompt)


        output = response.text.strip()
        print(output)


        extracted_array = extract_array(output)
        print(extracted_array)


        actual_array = convert_to_array(extracted_array)


        write_to_json(actual_array)

if __name__ == '__main__':
    main()

