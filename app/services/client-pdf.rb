require 'prawn/table'

class ClientPdf < Prawn::Document
  def initialize(client, options)
    super()

    @client = client
    @resumeOrder = client.get_resume_types

    branding
    header_bar
    table_content
  end

  def branding
    #This inserts an image in the pdf file and sets the size of the image
    image "#{Rails.root}/app/assets/images/resume-logo.jpg", width: 100, position: :center
  end

  def header_bar
    # The cursor for inserting content starts on the top left of the page. Here we move it down a little to create more space between the text and the image inserted above
    y_position = cursor - 20

    # The bounding_box takes the x and y coordinates for positioning its content and some options to style it
    bounding_box([0, y_position], :width => 540, :height => 40) do
        stroke do
            fill_color '343434'
            fill_and_stroke_rounded_rectangle [cursor-50, cursor], 540, 40, 0
            bounding_box([cursor - 35, cursor - 15], :width => 540) do
                text "Resume: #{@client[:first_name]} #{@client[:last_name]}", size: 15, color: 'FFFFFF'
            end
        end
    end

  end

  def table_content
    # Build resume tables by order
    @resumeOrder.each do |order|
        build_resume_table(map_title_from_category(order.job_type), filter_data_by_category(@client.resume, order.job_type))
    end
  end

  def filter_data_by_category(resume, category)
    data = [];

    resume.each do |r|
      if r[:job_type] == category
        data.push([r[:project], r[:credit], r[:company]])
      end
    end

    data
  end

  def build_resume_table(title, data)
    bounding_box([0, cursor - 40], :width => 540, :height => 50) do
      text "#{title}:", size: 15
    end

    table(data, :width => 520,
                :cell_style => {
                  :borders => [:bottom],
                  :border_width => 1,
                  :border_color => "EFEFEF"
                }
    )
  end

  def map_title_from_category(category)
      case category.downcase
        when "event" then "Concerts/Tours/Events"
        when "television" then "Television"
        when "award show" then "Award Shows"
        when "film" then "Film"
        when "commercial" then "Commercials"
        when "music video" then "Music Videos"
        when "corporate" then "Corporate"
        when "misc" then "Miscellaneous"
        when "award" then "Awards"
        when "theater" then "Theatre"
        when "print" then "Print"
        when "teaching" then "Teaching"
        when "industrials" then "Industrials"
        else ""
      end
  end
end
