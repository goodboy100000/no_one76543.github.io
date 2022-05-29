local SOURCE_PATH = "no_one76543/datafile.txt"
local DESTINATION_PATH = "C:/webpage/datafile.txt"

local fh = assert( io.open( SOURCE_PATH, "rb" ) )
local content = fh:read "*all"
fh:close()

local fh_out = assert( io.open( DESTINATION_PATH, "wb" ) )
fh_out:write( content )
fh_out:close()
